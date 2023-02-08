'use client'

import Day from '@/app/meeting/components/Day';
import { IMeeting } from '@/app/meeting/IMeeting';
import { IAvailability } from '@/app/meeting/types/IAvailability';
import Spinner from '@/app/Spinner';
import apiUrl from '@/lib/apiUrl';
import calendarDays from '@/lib/calendarDays';
import { useEffect, useState } from 'react';

export default function Calendar() {
  const days = calendarDays()
  const [availabilities, setAvailabilities] = useState<IAvailability[]>([])
  const [gmAvailabilities, setGmAvailabilities] = useState<IAvailability[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [isGmFetching, setIsGmFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    fetch(`${apiUrl()}/api/getAvailabilities`)
      .then((res) => res.json())
      .then((data) => {
        setAvailabilities(data)
        setIsFetching(false)
      })
    setIsGmFetching(true)
    fetch(`${apiUrl()}/api/getGmAvailabilities`)
      .then((res) => res.json())
      .then((data) => {
        setGmAvailabilities(data)
        setIsGmFetching(false)
      })
  }, [])

  if (isFetching || isGmFetching) return <Spinner />


  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-6 gap-x-4 mx-5">
      {days.map((day, index) => {
        return <Day day={day} key={index} availabilities={availabilities} gmAvailabilities={gmAvailabilities} />
      })}
    </div>
  )
}