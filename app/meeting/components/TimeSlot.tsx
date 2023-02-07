'use client'

import { IAvailability } from '@/app/meeting/types/IAvailability'
import { ISlot } from '@/app/meeting/types/ISlot'
import { useState } from 'react'

export default function TimeSlot({ slot, availabilities }: { slot: ISlot, availabilities: IAvailability[] }) {
  const availability = availabilities.find((availability) => {
    return availability.index === slot.index
  })

  const [selected, setSelected] = useState(!!availability)
  const [isFetching, setIsFetching] = useState(false)

  async function handleClick() {
    if (isFetching) return

    setIsFetching(true)
    if (selected) {
      setSelected(false)
      const res = await fetch(`http://localhost:3000/api/deleteAvailability/${slot.index}`, { method: 'DELETE' })
      if (res.status !== 200) setSelected(true)
    } else {
      setSelected(true)
      const res = await fetch(`http://localhost:3000/api/createAvailability`, {
        method: 'POST',
        body: JSON.stringify({ index: slot.index }),
      })
      if (res.status !== 200) setSelected(false)
    }
    setIsFetching(false)
  }

  let classNames
  if (selected) {
    classNames = 'mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-green-700 rounded text-white font-semibold border border-green-700 cursor-pointer'
  } else {
    classNames = 'mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-transparent text-blue-700 rounded hover:bg-blue-700 hover:text-white hover:font-semibold border border-blue-700 hover:border-transparent cursor-pointer'
  }

  if (isFetching) {
    classNames += ' opacity-50'
  }

  return <div onClick={handleClick} className={classNames}>{slot.name}</div>
}
