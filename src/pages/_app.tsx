import '@/styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <div>
    <Component {...pageProps} />
    <ToastContainer />
  </div>
  )
}
