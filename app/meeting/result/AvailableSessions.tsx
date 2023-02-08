'use client'

import Spinner from '@/app/Spinner';
import apiUrl from '@/lib/apiUrl';
import indexToDate from '@/lib/indexToDate';
import { useState, useEffect } from 'react';

export default function AvailableSessions() {
  const [availableMeetings, setAvailableMeetings] = useState<{
    timeSlots: number[];
    players: string[];
  }[]>([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    fetch(`${apiUrl()}/api/getResults`)
      .then((res) => res.json())
      .then((data) => {
        setAvailableMeetings(data)
        setIsFetching(false)
      })
  }, [])

  return (
    <div className="my-5 mx-5">
      {isFetching && <div><div>Obliczanie potencjalnych sesji:</div><Spinner /></div>}
      {!isFetching && availableMeetings.length === 0 && <div>Brak dostępnych sesji</div>}
      {
        availableMeetings.map((meeting, index) => (
          <div key={index}>
            {indexToDate(meeting.timeSlots[0], false)}-{indexToDate(meeting.timeSlots[meeting.timeSlots.length - 1], true)}: {meeting.players.join(', ')}
          </div>
        ))
      }
    </div>
  )

}