import Calendar from '@/app/meeting/components/Calendar';
import { IMeeting } from '@/app/meeting/IMeeting';
import { IAvailability } from '@/app/meeting/types/IAvailability';
import Link from 'next/link'
import { cookies } from "next/headers";
import apiUrl from '@/lib/apiUrl';


async function getAvailabilities(): Promise<IAvailability[]> {
  const sessionToken = cookies().get("next-auth.session-token")?.value
  const requestHeaders: HeadersInit = new Headers();
  if (sessionToken) {
    requestHeaders.set('cookie', `next-auth.session-token=${sessionToken}`)
  }

  console.log('apiUrl()', apiUrl())
  console.log('`${apiUrl()}/api/getAvailabilities`', `${apiUrl()}/api/getAvailabilities`)
  console.log('`next-auth.session-token=${sessionToken}`', `next-auth.session-token=${sessionToken}`)

  const res = await fetch(`${apiUrl()}/api/getAvailabilities`, {
    headers: requestHeaders
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function MeetingPage() {

  const availabilities = await getAvailabilities();
  const meeting: IMeeting = {
    id: 1,
    name: 'Burning Crowns S01E03',
  }

  return (
    <>
      <div className='text-xl mx-5 mt-5 text-blue-700 font-semibold' >{meeting.name}</div>
      <div className='text-bg mx-5 mt-1 mb-5 text-blue-700'>Choose your availability for the meeting</div>
      <Link className='btn ml-5' href="/">
        Return
      </Link>
      <Calendar meeting={meeting} availabilities={availabilities} />
    </>
  )
}
