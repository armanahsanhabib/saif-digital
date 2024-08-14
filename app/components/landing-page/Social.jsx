import Fiverr from '@/public/icons/1656738037fiverr-icon-png.webp'
import Whatsapp from '@/public/icons/3146791_whatsapp_logo_icon.png'
import Telegram from '@/public/icons/4375108_logo_telegram_icon.png'
import Discord from '@/public/icons/8545495_discord_message_interaction_logo_communication_icon.png'
import XMedia from '@/public/icons/twitter-x.png'
import Image from 'next/image'

const Social = () => {
  const links = [
    {
      href: 'https://www.fiverr.com/saifulb410',
      icon: Fiverr,
    },
    {
      href: 'https://discordapp.com/users/saifulb410',
      icon: Discord,
    },
    {
      href: 'https://t.me/Saifulb410',
      icon: Telegram,
    },
    {
      href: 'https://x.com/Saifulb410',
      icon: XMedia,
    },
    {
      href: 'https://wa.me/8801739585206',
      icon: Whatsapp,
    },
  ]
  return (
    <div className="social relative border-y">
      <div className="absolute -top-16" id="contact-me"></div>
      <div className="absolute right-0 top-0 -z-50 h-full w-full bg-gradient-to-r from-white via-purple-300 to-orange-200 sm:w-1/2"></div>
      <div className="container mx-auto px-2 py-10 sm:px-4 md:px-8">
        <p className="mb-3 text-center text-lg font-bold sm:text-start">
          Connect me
        </p>
        <div className="icons flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-5">
          {links.map((item, index) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              href={item.href}
              className="icon aspect-square w-max rounded-full bg-white p-2 shadow-lg ring-4 ring-gray-100 transition-all hover:shadow-xl hover:ring-sky-200 sm:p-4"
            >
              <Image
                src={item.icon}
                alt="icon"
                className="rotate_3d h-8 w-auto transition-all duration-1000 sm:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Social
