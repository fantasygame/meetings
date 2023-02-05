// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body)
    const availability = await prisma.availability.create({
      data: {
        userId: body.userId,
        index: body.index,
      }
    })
    res.status(200).json({ availability })
  } catch (error) {
    res.status(500).json({ error })
  }
}
