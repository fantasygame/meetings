import { prisma } from 'prisma/prismaClient'

export async function availablePlayers(timeSlots: number[]) {
  const sqlParts = timeSlots.map((timeSlot) => {
    return `SELECT name
    FROM "public"."Availability"
    WHERE index = ${timeSlot}
    `
  })
  const sql = sqlParts.join(' INTERSECT ')
  const result: { name: string }[] = await prisma.$queryRawUnsafe(sql)
  return result.map((row) => row.name)
}
