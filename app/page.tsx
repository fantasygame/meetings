import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Link from 'next/link'

const raleway = Raleway({ subsets: ['latin', 'latin-ext'] })

export default function Home() {
  return (
    <main className={raleway.className}>
      <div className='my-4 mx-4'>
        <h1 className="text-3xl">Meetings - zagrajmy sesyjkę</h1>
        <div className='my-5'>
          <div className='my-3'>
            Ucząc się nowych technologii stworzyliśmy z Gogi aplikację, która ma na celu pomóc nam umawiać się na sesje.
          </div>
          <div className='my-3'>
            Działa podobnie jak Doodle. Jako MG, wybieram terminy w których mogę prowadzić. Wy wybieracie kiedy możecie grać. Na koniec aplikacja sugeruje nam najlepsze terminy.
          </div>
          <div className='my-3'>
            W obecnej wersji (MVP) aplikacja szuka terminów na 3-5 godzinną sesję.
            W pierwszej kolejności szuka takiego terminu żeby grało jak najwięcej osób. Później patrzy na to żeby sesja była jak najdłuższa.
          </div>
          <div className='my-3'>
            Zaznaczając można wybrać nie tylko kiedy możemy grać, ale też temin który preferujemy.
            W niedalekiej przyszłości apka będzie to brała pod uwagę. Będzie też promowała graczy z większą dostępnością.
          </div>
          <div className='my-3'>
            Mamy również w planach dodać bota do Discorda, który będzie przypominał o zaznaczaniu dostępności i informował o terminie sesji.
          </div>
        </div>
        <div className='mt-10 text-xs'>
          <div className='my-3'>
            <div className="my-2">
            <div>Dla nerdów</div>
            <div>Tech stack:</div>
            </div>
            <ul>
              <li><Link href="https://www.typescriptlang.org/" target="_blank">Typescript ❤️❤️❤️</Link></li>
              <li><Link href="https://reactjs.org/" target="_blank">React ❤️❤️</Link></li>
              <li><Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS ❤️❤️</Link></li>
              <li><Link href="https://nextjs.org/" target="_blank">Next.js 13 - beta app dir ❤️</Link></li>
              <li><Link href="https://nextjs.org/docs/api-routes/introduction" target="_blank">Next.js REST API 😐</Link></li>
              <li><Link href="https://vercel.com/" target="_blank">Deployed to Vercel</Link></li>
              <li><Link href="https://railway.app/" target="_blank">Postgres database on Railway</Link></li>
              <li><Link href="https://github.com/fantasygame/meetings" target="_blank">Github repo</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </main >
  )
}
