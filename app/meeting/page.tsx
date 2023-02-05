import Calendar from '@/app/meeting/components/Calendar';
import { IMeeting } from '@/app/meeting/IMeeting';
import { IAvailability } from '@/app/meeting/types/IAvailability';
import Link from 'next/link'

async function getAvailabilities(): Promise<IAvailability[]> {
  const res = await fetch('http://localhost:3000/api/getAvailabilities');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
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
