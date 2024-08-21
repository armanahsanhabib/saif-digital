import HeroSecondary from '@/app/components/HeroSecondary'
import BackButton from '@/app/components/service-details/back-button'
import { fetchServiceDetails } from '@/app/lib/data'
import Link from 'next/link'

const page = async ({ searchParams }) => {
  const { _id } = searchParams
  const service = await fetchServiceDetails(_id)

  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">Service Not Found</h1>
          <p className="mt-4 text-lg">
            Sorry, the service you're looking for doesn't exist or has been
            removed.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeroSecondary title={service.subtitle} subtitle={service.title} />
      <div className="container mx-auto my-10 space-y-4">
        <BackButton />
        <h1 className="text-2xl font-medium text-orange-500">
          {service.heading}
        </h1>
        <div className="">
          <div className="mb-1 text-lg font-bold underline">Description</div>
          <p>{service.description}</p>
        </div>
        <div className="">
          <div className="mb-1 text-lg font-bold underline">Features</div>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="pt-3">
          <Link
            href={'/'}
            className="rounded-md border-2 border-orange-500 px-4 py-2 text-sm text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
          >
            View on Fiverr
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
