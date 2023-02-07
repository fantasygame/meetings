import Day from '@/app/meeting/components/Day';
import { IMeeting } from '@/app/meeting/IMeeting';
import { IAvailability } from '@/app/meeting/types/IAvailability';
import calendarDays from '@/lib/calendarDays';

export default function Calendar({ meeting, availabilities }: { meeting: IMeeting, availabilities: IAvailability[] }) {
  const days = calendarDays()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-6 gap-x-3">
      {days.map((day, index) => {
        return <Day day={day} key={index} availabilities={availabilities} />
      })}
    </div>
  )
}