import AvailableSessions from '@/app/meeting/result/AvailableSessions'
import { IAvailability } from '@/app/meeting/types/IAvailability'
import apiUrl from '@/lib/apiUrl'
import indexToHour from '@/lib/indexToDate'
import selectMeeting from '@/lib/selectMeeting'
import { useState, useEffect } from 'react'

export default async function ResultPage() {
  return (
    <div>
      <AvailableSessions />
    </div>
  )
}