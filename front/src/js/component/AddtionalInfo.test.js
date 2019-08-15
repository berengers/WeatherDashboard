import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux } from '../__test__/configure'
import AdditionalInfo from './AdditionalInfo'


describe('AdditionalInfo', () => {
  
  describe('Wind case', () => {
    const props = {
      type: 'wind',
      userParams: { lang: '' },
      city: { wind: { deg: null } }
    }
    
    it('Display wind icon with good dregres', () => {
      props.city.wind.deg = 35
      const { container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })
      const icon = container.querySelector('.wi')

      expect(icon.className).toContain('wi-wind')
      expect(icon.className).toContain(`towards-${props.city.wind.deg}-deg`)
    })

    it('Display "Vitesse du vent" and when props lang set to "fr"', () => {
      props.userParams.lang = 'fr'

      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText("Vitesse du vent"))
    })

    it('Display "Wind speed" when props lang set to "en"', () => {
      props.userParams.lang = 'en'
      
      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText("Wind speed"))
    })
  })

  describe('Himidity case', () => {
    const props = {
      type: 'humidity',
      userParams: { lang: '' },
      city: { main: { humidity: null } }
    }
    
    it('Display humidity icon', () => {
      props.city.main.humidity = 42
      const { container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })
      const icon = container.querySelector('.wi')
      
      expect(icon.className).toContain('wi-owm-321')
    })

    it('Display "Humidité" and when props lang set to "fr"', () => {
      props.userParams.lang = 'fr'

      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText("Humidité"))
    })

    it('Display "Humidity" when props lang set to "en"', () => {
      props.userParams.lang = 'en'
      
      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText("Humidity"))
    })

    it('Display good value and "%"', () => {
      props.city.main.humidity = 80
      
      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText(`${props.city.main.humidity}%`))
    })
  })

  describe('Pressure case', () => {
    const props = {
      type: 'pressure',
      userParams: { lang: '' },
      city: { main: { pressure: null } }
    }
    
    it('Display pressure icon', () => {
      const { container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })
      const icon = container.querySelector('.wi')
      
      expect(icon.className).toContain('wi-owm-904')
    })

    it('Display "Pression atmosphérique" and when props lang set to "fr"', () => {
      props.userParams.lang = 'fr'

      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText("Pression atmosphérique"))
    })

    it('Display "Air Pressure" when props lang set to "en"', () => {
      props.userParams.lang = 'en'
      
      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText("Air Pressure"))
    })

    it('Display good value and " hpa"', () => {
      props.city.main.pressure = 120
      
      const { getByText, container } = renderWithRedux(
        <AdditionalInfo type={props.type}/>,
        { initialState: { userParams: props.userParams, detailsCity: props.city } })

      expect(container).toContainElement(getByText(`${props.city.main.pressure} hPa`))
    })
  })

  describe('Type not supported case', () => {
    const props = {
      type: 'not supported',
      userParams: { lang: '' },
      city: { main: { pressure: null } }
    }
    
    test.todo('Set this test for don\'t display an error message')
    // it('Throw an error', () => {
    //   function element() {
    //     renderWithRedux(
    //       <AdditionalInfo type={props.type}/>,
    //       { initialState: { userParams: props.userParams, detailsCity: props.city } })
    //   }

    //   expect(element).toThrow() // Pass but display error message..
    // })
  })
})