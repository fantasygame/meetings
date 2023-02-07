import selectMeeting from '@/lib/selectMeeting'

export default async function ResultPage() {
  const availableMeetings = await selectMeeting()

  return (
    <div>
      Available sessions:
      {availableMeetings.map((meeting, index) => (
        <div key={index}>
          {meeting.timeSlot.join(', ')}: {meeting.players.join(', ')}
        </div>
      ))}
    </div>
  )
}