import Calendar from '@/app/meeting/components/Calendar';
import { IMeeting } from '@/app/meeting/IMeeting';
import Link from 'next/link'

export default async function MeetingPage() {
  const meeting: IMeeting = {
    id: 1,
    name: 'Burning Crowns',
  }

  return (
    <>
      <div className='text-xl mx-5 mt-5 text-gray-700 font-semibold'>{meeting.name}</div>
      <div className='mx-2'><Calendar /></div>
    </>
  )
}
