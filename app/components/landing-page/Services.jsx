import Bot from '@/public/icons/ai-voice-generator.gif'
import Manager from '@/public/icons/management-consulting.gif'
import Assistant from '@/public/icons/online-support.gif'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      _id: '66c5d280685eb7ac8f5e5026',
      icon: Manager,
      title: 'Community Manager',
      text: 'I am passionate about building and managing online communities that are vibrant, engaged, and supportive.',
    },
    {
      _id: '66c5d280685eb7ac8f5e5027',
      icon: Assistant,
      title: 'Virtual Assistant',
      text: 'I am a virtual assistant with experience in data entry, copy-pasting, and visual assistance.',
    },
    {
      _id: '66c5d280685eb7ac8f5e5028',
      icon: Bot,
      title: 'Telegram Bot Setup',
      text: 'I can setup professionally all the bots in your crypto telegram group.',
    },
  ]

  return (
    <div className="services relative">
      <div className="absolute top-0" id="services"></div>
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 py-8 sm:gap-20 sm:px-8 sm:py-[100px] md:grid-cols-2">
        <div className="left flex flex-col rounded-lg bg-[#fff2ea] p-3 sm:p-5">
          {services.map((item, index) => (
            <Link
              href={`/service-details?_id=${item._id}`}
              key={index}
              className="item rounded-lg from-[#fecacc] via-[#fecacc] to-[#cda6e9] hover:bg-gradient-to-br"
            >
              <div className="m-3 flex items-center gap-4 rounded-lg border bg-white p-4 sm:m-5">
                <div className="icon aspect-square h-16 w-auto sm:h-20">
                  <Image
                    src={item.icon}
                    alt="manager"
                    className="h-full w-auto"
                    unoptimized={true}
                  />
                </div>
                <div className="text space-y-1">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="right flex flex-col items-center gap-5 px-5 text-center sm:items-start sm:px-0 sm:text-start">
          <div className="heading space-y-2 text-3xl font-bold sm:text-5xl">
            <h1>My Awesome</h1>
            <h1 className="text-orange-500">Services</h1>
          </div>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ducimus deserunt? Quaerat tempore voluptatem quis saepe libero
            inventore aliquam qui animi expedita fuga id tempora repellendus, ad
            labore? Voluptatem facilis quaerat voluptas ex enim vitae
            consectetur! Laboriosam, tenetur suscipit! Accusamus dolore placeat
            amet ex, saepe tenetur, nostrum ad assumenda praesentium delectus
            reprehenderit quam dolorem a pariatur velit ut maxime laudantium,
            cumque rem.
          </p>
          <Link
            href={'/'}
            className="block w-max rounded-md bg-orange-500 px-5 py-2 font-medium text-white hover:bg-orange-600"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
