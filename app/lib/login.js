'use server'

import { dbConnect, dbDisconnect } from '@/lib/db'
import Admin from '@/models/admin'
import Customer from '@/models/customer'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function adminLogin(username, password) {
  try {
    await dbConnect()
    const admin = await Admin.findOne({ email: username })

    if (!admin) {
      return { error: 'Admin not found', status: 404 }
    }

    // Direct comparison without bcrypt (temporary approach)
    if (password !== admin.password) {
      return { error: 'Invalid credentials', status: 401 }
    }

    const token = jwt.sign(
      { _id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      },
    )

    return {
      message: 'Login successful',
      token,
      _id: admin._id.toString(),
      status: 200,
    }
  } catch (error) {
    console.error('Error during login:', error)
    return { error: 'Internal server error', status: 500 }
  } finally {
    dbDisconnect()
  }
}

export async function customerLogin(phone, password) {
  try {
    await dbConnect()
    const customer = await Customer.findOne({ phone })

    if (!customer) {
      return { error: 'Customer not found', status: 404 }
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, customer.password)

    if (!isMatch) {
      return { error: 'Invalid credentials', status: 401 }
    }

    // Generate a JWT token
    const token = jwt.sign(
      { _id: customer._id, role: 'customer' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    )

    return {
      message: 'Login successful',
      token,
      _id: customer._id.toString(),
      status: 200,
    }
  } catch (error) {
    console.error('Error during login:', error)
    return { error: 'Internal server error', status: 500 }
  } finally {
    dbDisconnect()
  }
}
