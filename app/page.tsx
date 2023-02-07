import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Link from 'next/link'

const raleway = Raleway({ subsets: ['latin', 'latin-ext'] })

export default function Home() {
  return (
    <main className={raleway.className}>
      <div className='my-4 mx-4'>
        <h1 className="text-3xl">Meetings - zagrajmy sesyjkę</h1>
        <div className='my-2'>
          <div className='my-3'>
            Ucząc się nowych technologii stworzyliśmy z Gogi aplikację, która może pomóc nam umawiać się na sesje.
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
          <div>
            Mamy również w planach dodać bota do Discorda, który będzie przypominał o zaznaczaniu dostępności i informował o terminie sesji.
          </div>
          <Link href="/meeting">
            <div className="btn my-10 mx-10">Kiedy możesz grać?</div>
          </Link>
        </div>
      </div>
    </main >
  )
}
