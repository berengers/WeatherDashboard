
export function displayUnit(unit) {
  switch (unit) {
    case 'imperial':
      return '°F'
      break
    case 'metric':
      return '°C'
      break
    default:
      return '°K';
  }
}

export function convertSpeed(speed, unit='metric') {
  if (unit === 'metric')
    return `${speed * 3.6}km/h`
  else if (unit === 'imperial')
    return `${speed}miles/h`
}