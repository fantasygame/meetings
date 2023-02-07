import calendarDays from '@/lib/calendarDays'

export default function indexToDate(index: number, addHalfHour: boolean) {
  const days = calendarDays()
  for (const day of days) {
    for (const slot of day.slots) {
      if (slot.index === index) {
        if (addHalfHour) {
          return `${addHalfHourToString(slot.name)}`
        } else {
          return `${day.name} ${slot.name}`
        }
      }
    }
  }
  return null
}

function addHalfHourToString(hour: string) {
  const [h, m] = hour.split(':')
  const minutes = parseInt(m)
  const hours = parseInt(h)

  if (minutes === 30) {
    const newHour = hours + 1
    return `${newHour}:00`
  } else {
    return `${hour}:30`
  }
}