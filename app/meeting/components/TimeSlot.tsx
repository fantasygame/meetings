'use client'

import { IAvailability } from '@/app/meeting/types/IAvailability'
import { useState } from 'react'

export interface ISlot {
  index: number
  name: string
}

export default function TimeSlot({ slot, availabilities }: { slot: ISlot, availabilities: IAvailability[] }) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  const isAvailable = () => {
    const available = availabilities.find((availability) => {
      return availability.index === slot.index
    })
    return !!available
  }

  function renderTimeSlotButton(selected: boolean): JSX.Element {
    if (selected || isAvailable()) {
      return <div onClick={handleClick} className='mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-green-700 rounded text-white font-semibold border border-green-700 cursor-pointer'>{slot.name}</div>
    } else {
      return <div onClick={handleClick} className='mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-transparent text-blue-700 rounded hover:bg-blue-700 hover:text-white hover:font-semibold border border-blue-700 hover:border-transparent cursor-pointer'>{slot.name}</div>
    }
  }

  return (
    <>
      {renderTimeSlotButton(selected)}
    </>
  )
}
