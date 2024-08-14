const Footer = () => {
  const date = new Date()
  return (
    <footer className="footer bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-between gap-1 border-t px-5 py-5 sm:flex-row sm:px-8 sm:py-8">
        <div className="logo">
          <span>&copy; {date.getFullYear()} - </span>
          <span className="font-bold">Saiful</span>{' '}
          <span className="font-medium">Digital</span>
        </div>
        <div className="developer text-sm text-gray-500 sm:text-base">
          Developed by:{' '}
          <a
            href="https://ahsandevhub.com"
            className="hover:text-blue-600 hover:underline"
          >
            Ahsan DevHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
