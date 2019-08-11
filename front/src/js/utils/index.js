export function temperature(temp, decimals=1, unit) {
  return (temp / 10).toFixed(decimals)
}

export function displayUnit(unit) {
  switch (unit) {
    case 'imperial':
      return '°F'
    case 'metric':
      return '°C'
    default:
      return '°K';
  }
}

export function convertSpeed(speed, unit='metric') {
  if (unit === 'metric')
    return `${speed * 3.6}km/h`
  else if (unit === 'imperial')
    return
      `${speed}miles/h`
}