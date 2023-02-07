import { availablePlayers } from '@/lib/availablePlayers';
import { possibleFourHoursTimeSlots } from '@/lib/possibleTimeSlots';

export default async function findMeeting(hours: number) {
  const meetings: { timeSlot: number[], players: string[] }[] = [];
  for (const timeSlots of possibleFourHoursTimeSlots(hours)) {
    const players = await availablePlayers(timeSlots)
    if (players.length === 0) continue
    meetings.push({ timeSlot: timeSlots, players })
  }
  return meetings.sort((a, b) => b.players.length - a.players.length)
}
