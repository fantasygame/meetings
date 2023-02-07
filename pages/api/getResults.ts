// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import selectMeeting from '@/lib/selectMeeting'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import isUserAllowed from '@/pages/api/isUserAllowed'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  const name = session?.user?.name

  if (!isUserAllowed(session) || !name) {
    res.status(401).json({ error: 'Not authenticated' })
    return
  }

  try {
    const availableMeetings = await selectMeeting()
    res.status(200).json(availableMeetings)
  } catch (error) {
    res.status(500).json({ error })
  }
}
