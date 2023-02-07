import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Link from 'next/link'

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={raleway.className}>
      <h1 className="text-3xl">Hello World</h1>
      <Link className='btn' href="/meeting">
        Meeting
      </Link>
      <Link className='btn' href="/meeting/result">
        Possible meeting dates
      </Link>
    </main>
  )
}
