import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
