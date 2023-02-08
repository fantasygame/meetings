import possibleMeetings from '@/lib/possibleMeetings';

export default async function selectMeeting() {
  const result = await Promise.all([possibleMeetings(10), possibleMeetings(9), possibleMeetings(8), possibleMeetings(7), possibleMeetings(6)])
  const meetings = result.flat()
  // order meetings by number of players and number of time slots (higher number of players first, then higher number of time slots) descenring
  const orderedMeetings = meetings.sort((a, b) => {
    if (b.players.length === a.players.length) {
      return b.timeSlots.length - a.timeSlots.length
    }
    return b.players.length - a.players.length
  })

  return orderedMeetings
}