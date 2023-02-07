import findMeetings from '@/lib/findMeetings';

export default async function selectMeeting() {
  const fiveHourMeetings = findMeetings(5)
  const fourHourMeetings = findMeetings(4)
  const threeHourMeetings = findMeetings(3)

  const result = await Promise.all([fiveHourMeetings, fourHourMeetings, threeHourMeetings])
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