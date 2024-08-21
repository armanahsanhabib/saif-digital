import Footer from '../components/Footer'
import Header from '../components/Header'

export const metadata = {
  title: 'Saif Digital',
  description: 'Community Manager, Virtual Assistant, Telegram bot setup',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
