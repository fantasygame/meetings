import { prisma } from 'prisma/prismaClient'

export default function findSessions(hours: number) {
  for (const timeSlot of possibleFourHoursTimeSlots(hours)) {
    console.log(timeSlot)
  }
}

function possibleFourHoursTimeSlots(hours: number) {
  const possibleHours: number[][] = []
  for (let i = 1; i <= (336 - hours + 1); i++) {
    const timeSlots = []
    for (let j = 0; j < hours; j++) {
      timeSlots.push(i + j)
    }
    possibleHours.push(timeSlots)
  }
  return possibleHours
}