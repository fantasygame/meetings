import Day, { IDay } from '@/app/meeting/components/Day';
import { ISlot } from '@/app/meeting/components/TimeSlot';
import { IMeeting } from '@/app/meeting/IMeeting';
import { IAvailability } from '@/app/meeting/types/IAvailability';

export default function Calendar({ meeting, availabilities }: { meeting: IMeeting, availabilities: IAvailability[] }) {
  const days = generateDays()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-6 gap-x-3">
      {days.map((day, index) => {
        return <Day day={day} key={index} availabilities={availabilities} />
      })}
    </div>
  )
}

function generateDays() {
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const hourNames = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30']
  const days: IDay[] = []

  let currentIndex = 1
  dayNames.forEach((dayName) => {
    let day: IDay = { name: dayName, slots: [] }
    hourNames.forEach((hourName) => {
      const slot: ISlot = { index: currentIndex, name: hourName }
      currentIndex += 1
      day.slots.push(slot)
    })
    days.push(day)
  })
  return days
}
