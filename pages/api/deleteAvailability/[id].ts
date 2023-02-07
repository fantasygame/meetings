// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import isUserAllowed from '@/pages/api/isUserAllowed'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { prisma } from 'prisma/prismaClient'

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
    const id = req.query.id
    if (!id) throw new Error('No id provided')

    const availability = await prisma.availability.findFirst({ where: { id: +id, name } })

    if (!availability) {
      res.status(404).json({ error: 'Not found' })
      return
    }

    await prisma.availability.delete({
      where: {
        id: +id,
      }
    })
    res.status(200).json({ id })
  } catch (error) {
    res.status(500).json({ error })
  }
}
