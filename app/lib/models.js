import mongoose from 'mongoose'

// Service schema
const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

export const Service =
  mongoose.models.Service || mongoose.model('Service', serviceSchema)

// Review schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  ordered_item: {
    type: String,
    required: true,
  },
})

export const Review =
  mongoose.models.Review || mongoose.model('Review', reviewSchema)
