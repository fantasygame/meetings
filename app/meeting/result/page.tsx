import indexToHour from '@/lib/indexToHour'
import selectMeeting from '@/lib/selectMeeting'

export default async function ResultPage() {
  const availableMeetings = await selectMeeting()

  return (
    <div>
      Available sessions:
      {availableMeetings.map((meeting, index) => (
        <div key={index}>
          {indexToHour(meeting.timeSlots[0])}-{indexToHour(meeting.timeSlots[meeting.timeSlots.length - 1])}: {meeting.players.join(', ')}
        </div>
      ))}
    </div>
  )
}