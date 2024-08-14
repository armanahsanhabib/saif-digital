import Saiful from '@/public/saiful image.png'
import Image from 'next/image'
import Link from 'next/link'
import Typing from './Typing'

const Hero = () => {
  return (
    <div
      className="hero bg-gradient-to-r from-[#fff1f0] to-[#f9e7db]"
      id="home"
    >
      <div className="container mx-auto flex items-center justify-center px-5 py-[50px] sm:px-8 md:h-[700px] md:py-0">
        <div className="content grid h-full grid-cols-1 items-center md:grid-cols-2 xl:w-[92%]">
          <div className="text mt-5 flex flex-col items-center gap-y-5 text-center md:items-start md:gap-y-5 md:text-start">
            <div className="heading space-y-2 text-4xl font-black sm:text-6xl md:space-y-4">
              <h3 className="">Hy, This is</h3>
              <h1 className="text-orange-500">Saiful Islam</h1>
            </div>
            <div className="">
              <Typing />
            </div>
            <p className="text-sm text-gray-500 sm:text-base">
              I'm a multi-skilled person. I love to explore new skills
              regularly. I’m a quick learner and easily cope with new tech
              things and platforms. I have 2 years of experience managing
              Discord, telegram servers, and social media platforms.
            </p>
            <Link
              href={'/'}
              className="w-max rounded-md bg-orange-500 px-8 py-2 font-medium text-white hover:bg-orange-600"
            >
              Hire Me
            </Link>
          </div>
          <div
            className="photo order-first flex h-full flex-col md:order-none"
            // style={{
            //   backgroundImage: `url('/hero_bg.svg')`,
            //   backgroundSize: '100%',
            //   backgroundPosition: '0 100px',
            //   backgroundRepeat: 'no-repeat',
            // }}
          >
            <div className="flex-grow"></div>
            <Image
              src={Saiful}
              alt="saiful islam"
              className="mx-auto w-[90%] md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
