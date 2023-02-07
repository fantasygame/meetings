export function possibleTimeSlots(hours: number) {
  const MAX_INDEX = 336
  // const MAX_INDEX = 10
  const possibleHours: number[][] = []
  for (let i = 1; i <= (MAX_INDEX - hours + 1); i++) {
    const timeSlots = []
    for (let j = 0; j < hours; j++) {
      timeSlots.push(i + j)
    }
    possibleHours.push(timeSlots)
  }
  return possibleHours
}