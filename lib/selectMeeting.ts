import findMeetings from '@/lib/findMeetings';

export default async function selectMeeting() {
  const fiveHourMeetings = await findMeetings(5)
  const fourHourMeetings = await findMeetings(4)
  const threeHourMeetings = await findMeetings(3)

  const meetings = [...fiveHourMeetings, ...fourHourMeetings, ...threeHourMeetings]

  // order meetings by number of players and number of time slots (higher number of players first, then higher number of time slots) descenring
  const orderedMeetings = meetings.sort((a, b) => {
    if (b.players.length === a.players.length) {
      return b.timeSlot.length - a.timeSlot.length
    }
    return b.players.length - a.players.length
  })

  return orderedMeetings
}