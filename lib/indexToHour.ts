import calendarDays from '@/lib/calendarDays'

export default function indexToDate(index: number) {
  const days = calendarDays()
  for (const day of days) {
    for (const slot of day.slots) {
      if (slot.index === index) {
        return `${day.name} ${slot.name}`
      }
    }
  }
  return null
}