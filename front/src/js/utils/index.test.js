import { displayUnit, convertSpeed } from './index'


describe('Utils', () => {
  
  describe('displayUnit', () => {
    it('return "°F" for imperial unit', () => {
      expect(displayUnit('imperial')).toBe('°F')
    })

    it('return "°C" for metric unit', () => {
      expect(displayUnit('metric')).toBe('°C')
    })

    it('return "°K" unit is null or others', () => {
      expect(displayUnit(null)).toBe('°K')
      expect(displayUnit('Metric')).toBe('°K')
      expect(displayUnit('métric')).toBe('°K')
      expect(displayUnit(undefined)).toBe('°K')
    })
  })

  describe('convertSpeed', () => {
    it('return speed and miles/h for imperial unit', () => {
      expect(convertSpeed(100, 'imperial')).toBe('100miles/h')
    })

    it('return speed * 3.6 and km/h for imperial unit', () => {
      expect(convertSpeed(100, 'metric')).toBe(`${100 * 3.6}km/h`)
    })
  })
})