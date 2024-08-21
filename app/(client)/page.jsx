import Hero from '../components/landing-page/Hero'
import Message from '../components/landing-page/Message'
import Reviews from '../components/landing-page/Reviews'
import SampleWorks from '../components/landing-page/SampleWorks'
import Services from '../components/landing-page/Services'
import Social from '../components/landing-page/Social'

const page = () => {
  return (
    <main>
      <Hero />
      <Social />
      <Services />
      <SampleWorks />
      <Reviews />
      <Message />
    </main>
  )
}

export default page
