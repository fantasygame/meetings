'use client'

import { useState } from 'react'

export default function TimeSlot({ timeSlot }: { timeSlot: string }) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  return (
    <div onClick={handleClick} className='mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-transparent text-blue-700 rounded hover:bg-blue-700 hover:text-white hover:font-semibold border border-blue-700 hover:border-transparent'>{timeSlot} {selected ? 'selected' : ''}</div>
  )
}