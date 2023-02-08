'use client'

import { IAvailability } from '@/app/meeting/types/IAvailability'
import { ISlot } from '@/app/meeting/types/ISlot'
import apiUrl from '@/lib/apiUrl'
import isGm from '@/lib/isGm'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function TimeSlot({ slot, availabilities, gmAvailabilities }: { slot: ISlot, availabilities: IAvailability[], gmAvailabilities: IAvailability[] }) {
  const availability = availabilities.find((availability) => {
    return availability.index === slot.index
  })
  const gmAvailability = gmAvailabilities.find((availability) => {
    return availability.index === slot.index
  })
  const { data: session } = useSession()

  const [selected, setSelected] = useState(!!availability)
  const [preferred, setPreferred] = useState(!!availability?.preferred)
  const [isFetching, setIsFetching] = useState(false)
  const [locked] = useState(!!!gmAvailability && !isGm(session))

  async function handleClick() {
    if (isFetching) return
    if (locked) return

    setIsFetching(true)
    if (preferred) {
      setSelected(false)
      setPreferred(false)
      const res = await fetch(`${apiUrl()}/api/deleteAvailability/${slot.index}`, { method: 'DELETE' })
      if (res.status !== 200) {
        setSelected(true)
        setPreferred(true)
      }
    } else if (selected) {
      setPreferred(true)
      const res = await fetch(`${apiUrl()}/api/preferAvailability/${slot.index}`, { method: 'PUT' })
      if (res.status !== 200) setPreferred(false)
    } else {
      setSelected(true)
      const res = await fetch(`${apiUrl()}/api/createAvailability`, {
        method: 'POST',
        body: JSON.stringify({ index: slot.index }),
      })
      if (res.status !== 200) setSelected(false)
    }
    setIsFetching(false)
  }

  let classNames
  let buttonText
  if (locked) {
    classNames = 'mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-red-500 opacity-30 rounded text-white font-semibold border border-yellow-500 cursor-not-allowed'
    buttonText = ''
  } else if (preferred) {
    classNames = 'mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-yellow-500 rounded text-white font-semibold border border-yellow-500 cursor-pointer'
    buttonText = '⭐️'
  } else if (selected) {
    classNames = 'mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-green-700 rounded text-white font-semibold border border-green-700 cursor-pointer'
    buttonText = '🎲'
  } else {
    classNames = 'mb-1 text-center w-1/3 sm:w-11/12 md:11/12 lg:11/12 px-4 py-2 bg-transparent text-gray-700 rounded hover:bg-gray-700 hover:text-white hover:font-semibold border border-gray-700 hover:border-transparent cursor-pointer'
    buttonText = ''
  }

  if (isFetching) {
    classNames += ' opacity-50'
  }

  return <div onClick={handleClick} className={classNames}>{slot.name} {buttonText}</div>
}
