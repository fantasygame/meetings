export default function Day({ dayName }: { dayName: string }) {
  const timeSlots = ['9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '18:30-19:00', '19:00-19:30', '19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '21:30-22:00', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00']
  return (
    <div>
      <div className='text-xl underline m-5 text-blue-700 font-semibold'>
        {dayName}
      </div>
      <div>
        {timeSlots.map((timeSlot, index) => {
          return <div className='mb-1 text-center w-1/6 px-4 py-2 bg-transparent text-blue-700 rounded hover:bg-blue-700 hover:text-white hover:font-semibold border border-blue-700 hover:border-transparent' key={index}>{timeSlot}</div>
        })}
      </div>
    </div>
  )
}
