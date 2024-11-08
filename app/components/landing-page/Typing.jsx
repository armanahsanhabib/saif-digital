'use client'

import { ReactTyped } from 'react-typed'

const Typing = () => (
  <h2 className="text-xl font-semibold sm:text-2xl">
    I&apos;m a{' '}
    <ReactTyped
      strings={[
        'social media manager',
        'virtual assistant',
        'telegram moderator',
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
      className="text-orange-500"
    />
  </h2>
)

export default Typing
