import Image from 'next/image'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={raleway.className}>
      <h1 className="text-3xl">Hello World</h1>
    </main>
  )
}
