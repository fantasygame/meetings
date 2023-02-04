import Calendar from '@/app/meeting/components/Calendar';
import { IMeeting } from '@/app/meeting/IMeeting';
import Link from 'next/link'

export default function MeetingPage() {
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
      <Calendar meeting={meeting} />
    </>
  )
}
