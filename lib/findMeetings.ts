import { availablePlayers } from '@/lib/availablePlayers';
import { possibleFourHoursTimeSlots } from '@/lib/possibleTimeSlots';

export default async function findMeeting(hours: number) {
  const promises = []
  for (const timeSlots of possibleFourHoursTimeSlots(hours)) {
    promises.push(availablePlayers(timeSlots))
  }
  const meetings = await Promise.all(promises)
  const meetingsWithPlayers = meetings.filter((meeting) => meeting.players.length > 0)
  return meetingsWithPlayers.sort((a, b) => b.players.length - a.players.length)
}
