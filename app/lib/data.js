'use server'

import { dbConnect, dbDisconnect } from './db'
import { Review, Service } from './models'

export async function fetchServiceDetails(_id) {
  try {
    await dbConnect()

    const service = await Service.findById(_id).lean()
    service._id = service._id.toString()

    return service
  } catch (error) {
    console.error('Failed to fetch service details:', error)
    throw new Error('Failed to fetch service details!')
  } finally {
    dbDisconnect()
  }
}

export async function fetchReviews() {
  try {
    await dbConnect()

    const reviews = await Review.find().lean()
    const updatedReviews = reviews.map((review) => ({
      ...review,
      _id: review._id.toString(),
    }))

    return updatedReviews
  } catch (error) {
    console.error('Failed to fetch reviews:', error)
    throw new Error('Failed to fetch reviews!')
  } finally {
    dbDisconnect()
  }
}
