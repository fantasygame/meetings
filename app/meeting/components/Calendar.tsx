import Day from '@/app/meeting/components/Day';
import { IMeeting } from '@/app/meeting/IMeeting';

export default function Calendar({ meeting }: { meeting: IMeeting }) {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <>
      {dayNames.map((dayName, index) => {
        return <Day dayName={dayName} key={index} />
      })}
    </>
  )
}