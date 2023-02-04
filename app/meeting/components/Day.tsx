export default function Day({ dayName }: { dayName: string }) {
  const timeSlots = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5]
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
