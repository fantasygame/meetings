import Calendar from '@/app/meeting/components/Calendar';
import { IMeeting } from '@/app/meeting/IMeeting';

export default function MeetingPage() {
  const meeting: IMeeting = {
    id: 1,
    name: 'Burning Crowns S01E03',
  }

  return (
    <>
      Choose your availability for the meeting {meeting.name}
      <Calendar meeting={meeting} />
    </>
  )
}