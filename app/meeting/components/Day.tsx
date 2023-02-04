import TimeSlot, { ISlot } from '@/app/meeting/components/TimeSlot'

export interface IDay {
  name: string
  slots: ISlot[]
}

export default function Day({ day }: { day: IDay }) {
  return (
    <div>
      <div className='text-xl underline m-5 text-blue-700 font-semibold'>
        {day.name}
      </div>
      <div>
        {day.slots.map((slot, index) => {
          return <TimeSlot slot={slot} key={index} />
        })}
      </div>
    </div>
  )
}
