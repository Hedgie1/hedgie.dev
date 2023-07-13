import '@/styles/globals.css'
import { Sofia_Sans } from 'next/font/google'


const sofia = Sofia_Sans({ subsets: ['latin-ext'] })

export default function App({ Component, pageProps }) {


  return (
    <main className={sofia.className}>
      <Component {...pageProps} />
    </main>
  )
}
