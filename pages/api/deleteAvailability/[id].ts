// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.id
    if (!id) throw new Error('No id provided')

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
