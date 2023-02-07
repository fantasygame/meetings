import AvailableSessions from '@/app/meeting/result/AvailableSessions'
import { IAvailability } from '@/app/meeting/types/IAvailability'
import apiUrl from '@/lib/apiUrl'
import indexToHour from '@/lib/indexToDate'
import selectMeeting from '@/lib/selectMeeting'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default async function ResultPage() {
  return (
    <div>
      <Link className='btn ml-5' href="/">
        Return
      </Link>
      <AvailableSessions />
    </div>
  )
}