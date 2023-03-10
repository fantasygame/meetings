import { availablePlayers } from '@/lib/availablePlayers';
import { possibleTimeSlots } from '@/lib/possibleTimeSlots';

export default async function possibleMeetings(hours: number) {
  const possibleSlots = possibleTimeSlots(hours)

  // Batch sql queries to avoid hitting database pool limit
  const batchSize = 5;
  let position = 0;
  let meetings: {
    timeSlots: number[];
    players: string[];
  }[] = [];
  while (position < possibleSlots.length) {
    const itemsForBatch = possibleSlots.slice(position, position + batchSize);
    meetings = [...meetings, ...await Promise.all(itemsForBatch.map(item => availablePlayers(item)))];
    position += batchSize;
  }
  const gmName = process.env.NEXT_PUBLIC_GM_NAME as string
  const meetingsWithPlayers = meetings.filter((meeting) => meeting.players.length >= 2 && meeting.players.includes(gmName))
  return meetingsWithPlayers.sort((a, b) => b.players.length - a.players.length)
}