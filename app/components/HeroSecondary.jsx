const HeroSecondary = ({ title, subtitle }) => {
  return (
    <div
      className="hero-secondary bg-gradient-to-r from-[#fff1f0] to-[#f9e7db]"
      id="home"
    >
      <div className="container mx-auto flex items-center justify-center px-5 pb-[50px] pt-[100px] sm:px-8 md:h-[300px]">
        <div className="content flex h-max flex-col gap-2 border-orange-500 text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSecondary
