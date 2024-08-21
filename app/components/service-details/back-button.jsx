'use client'

import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 rounded text-sm hover:text-orange-500 hover:underline"
    >
      <IoIosArrowBack />
      Back
    </button>
  )
}
