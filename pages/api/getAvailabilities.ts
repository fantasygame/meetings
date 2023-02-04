// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.availability.findMany()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
}
