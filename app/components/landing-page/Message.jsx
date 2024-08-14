'use client'

import sendMail from '@/app/lib/sendMail'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'

const Message = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    name: '',
    message: '',
  })
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await sendMail(formData)
      if (response.status === 200) {
        setSuccess('Message sent successfully!')
        setFormData({
          name: '',
          to: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send message.')
      }
    } catch (error) {
      console.error('Error:', error.message)
      setError('Failed to send message, please try again!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative bg-white">
      <div className="absolute -top-10" id="message-me"></div>
      <div className="container relative mx-auto flex flex-col items-center px-3 py-[50px] sm:px-[26px] lg:py-[80px] xl:py-[125px]">
        <div className="heading space-y-2 text-3xl font-bold sm:text-5xl">
          <h1>
            Message <span className="text-orange-500">Me</span>
          </h1>
        </div>
        <div className="mt-3 text-center text-gray-500">
          {error && <p className="font-medium text-rose-600">{error}</p>}
          {success && <p className="font-medium text-green-600">{success}</p>}
        </div>
        <div className="items_container mt-8 w-full md:w-[70%]">
          <form
            className="grid w-full grid-cols-2 gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="fullName"
              placeholder="Your Name"
              className="col-span-2 w-full rounded-lg border-2 border-[#dadada] px-3 py-2 text-gray-800 focus:outline-orange-500 sm:col-span-1"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="to"
              id="email"
              placeholder="Your Email"
              className="col-span-2 w-full rounded-lg border-2 border-[#dadada] px-3 py-2 text-gray-800 focus:outline-orange-500 sm:col-span-1"
              required
              value={formData.to}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter the Subject"
              className="col-span-2 w-full rounded-lg border-2 border-[#dadada] px-3 py-2 text-gray-800 focus:outline-orange-500"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              className="col-span-2 h-[250px] w-full resize-none rounded-lg border-2 border-[#dadada] px-3 py-2 text-gray-800 focus:outline-orange-500 lg:h-[220px] xl:h-[300px]"
              placeholder="Enter the Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="button col-span-2 flex flex-col items-center">
              <button
                type="submit"
                className={`flex items-center gap-2 rounded px-5 py-2 font-[600] transition-all ${loading ? 'cursor-wait bg-gray-400' : 'bg-orange-500'} text-white hover:gap-3`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    Sending Message{' '}
                    <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                  </>
                ) : (
                  <>
                    Send Message <IoMdSend className="text-lg" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Message
