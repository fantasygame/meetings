import TimeSlot from '@/app/meeting/components/TimeSlot'
import { IAvailability } from '@/app/meeting/types/IAvailability'
import { IDay } from '@/app/meeting/types/IDay'
import { ISlot } from '@/app/meeting/types/ISlot'

export default function Day({ day, availabilities }: { day: IDay, availabilities: IAvailability[] }) {
  return (
    <div>
      <div className='text-xl m-5 text-gray-700 font-semibold'>
        {day.name}
      </div>
      <div>
        {day.slots.map((slot, index) => {
          return <TimeSlot slot={slot} key={index} availabilities={availabilities} />
        })}
      </div>
    </div>
  )
}
