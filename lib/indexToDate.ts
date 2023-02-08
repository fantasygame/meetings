import calendarDays from '@/lib/calendarDays'

export default function indexToDate(index: number, last: boolean) {
  const days = calendarDays()
  for (const day of days) {
    for (const slot of day.slots) {
      if (slot.index === index) {
        if (last) {
          return `${slot.name.split('-')[1]}`
        } else {
          return `${day.name} ${slot.name.split('-')[0]}`
        }
      }
    }
  }
  return null
}