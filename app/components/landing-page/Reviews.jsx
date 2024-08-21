import { fetchReviews } from '@/app/lib/data'

const Reviews = async () => {
  const reviews = await fetchReviews()

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
  }

  const getRandomColor = () => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-teal-500',
      'bg-indigo-500',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className="container mx-auto flex flex-col items-center px-2 py-10 sm:px-4 sm:py-[150px] md:px-8">
      <div className="heading relative space-y-2 text-3xl font-bold sm:text-5xl">
        <h1 className="relative z-10 inline-block">
          Client <span className="text-orange-500">Reviews</span>
        </h1>
        <div className="absolute -bottom-3 left-0 mt-[-12px] h-4 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 25"
            preserveAspectRatio="none"
            className="h-full w-full text-orange-500"
          >
            <path
              d="M0 20 Q50 10, 100 20 T200 20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="portfolio_container mt-8 grid w-full grid-cols-1 justify-between gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review_card flex flex-col rounded-lg border bg-white p-4 shadow-md"
          >
            <div className="profile flex items-center space-x-4">
              <div
                className={`profile_pic flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold capitalize text-white ${getRandomColor()}`}
              >
                {getInitials(review.user)}
              </div>
              <div className="profile_info">
                <h2 className="text-lg font-semibold">{review.user}</h2>
                <p className="flex items-center text-sm text-gray-500">
                  <span className="">{review.country}</span>
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{review.review}</p>
            <p className="mt-2 text-sm text-gray-400">
              Ordered: {review.ordered_item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
