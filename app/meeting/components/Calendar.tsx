import Day from '@/app/meeting/components/Day';
import { IMeeting } from '@/app/meeting/IMeeting';

export default function Calendar({ meeting }: { meeting: IMeeting }) {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-y-6 gap-x-3">
      {dayNames.map((dayName, index) => {
        return <Day dayName={dayName} key={index} />
      })}
    </div>
  )
}