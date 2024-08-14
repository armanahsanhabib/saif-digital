'use server'

import ejs from 'ejs'
import nodemailer from 'nodemailer'

export default async function sendMail(mailData) {
  try {
    const { to, subject, name, message } = mailData

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Render the confirmation mail template
    const confirmationTemplate = await ejs.renderFile(
      'app/templates/client-confirmation.ejs',
      {
        name,
        subject,
        message,
      },
    )

    // Render the confirmation mail template
    const adminTemplate = await ejs.renderFile(
      'app/templates/admin-notify.ejs',
      {
        name,
        to,
        subject,
        message,
      },
    )

    // Define confirmation mail options
    const confimationMailOptions = {
      from: `"Saif Digital" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Email Confirmation from Saif Digital',
      html: confirmationTemplate,
    }

    // Define admin notify options
    const adminMailOptions = {
      from: `"Saif Digital" <${to}>`,
      to: process.env.EMAIL_USER,
      subject: `New mail received from ${name}`,
      html: adminTemplate,
    }

    // Send email and handle result
    const confirmationMailInfo = await transporter.sendMail(
      confimationMailOptions,
    )
    const adminMailInfo = await transporter.sendMail(adminMailOptions)

    console.log('Confirmation mail sent:', confirmationMailInfo.response)
    console.log('Admin mail sent:', adminMailInfo.response)

    return { message: 'Email sent successfully', status: 200 }
  } catch (error) {
    console.error('Error sending email:', error.message)

    return { message: 'Error sending email', status: 500 }
  }
}
