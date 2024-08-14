'use client'

import Image from 'next/image'
import { useState } from 'react'

const SampleWorks = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    '/sample-works/sample-work (1).jpg',
    '/sample-works/sample-work (2).jpg',
    '/sample-works/sample-work (3).jpg',
    '/sample-works/sample-work (4).jpg',
    '/sample-works/sample-work (5).jpg',
    '/sample-works/sample-work (6).jpg',
  ]

  return (
    <div className="relative bg-gradient-to-r from-transparent via-[#ffeee6] to-[#f1e2f9] sm:py-20">
      <div className="absolute -top-20" id="sample-works"></div>
      <div className="container mx-auto flex flex-col items-center px-2 py-10 sm:px-4 md:px-8">
        <div className="heading space-y-2 text-3xl font-bold sm:text-5xl">
          <h1>
            Sample <span className="text-orange-500">Works</span>
          </h1>
        </div>
        <div className="portfolio_container mt-8 grid w-full grid-cols-1 justify-between gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="item relative h-52 w-full cursor-pointer overflow-hidden rounded-lg sm:h-72"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Sample work ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="h-full w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected work"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 rounded-md bg-rose-500 px-2 text-2xl text-white shadow-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SampleWorks
