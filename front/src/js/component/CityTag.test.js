import React from 'react'
import { fireEvent } from '@testing-library/react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CityTag } from './CityTag'

const mockDeleteCity = jest.fn(() => {})

jest.mock('../store/action/city', () => {
  return {
    deleteCity: (cityId, openWeatherCityId) => {
      return dispatch => {
        mockDeleteCity(cityId, openWeatherCityId)
      }
    }
  }
})


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {}
const store = mockStore(initialState)


describe('CityTag', () => {
  
  it('display the name of the city', () => {
    const city = { name: 'adele' }
    const { getByText, container } = render(<CityTag city={city}/>)

    expect(container).toContainElement(getByText(city.name))
  })

  it('when click to delete button, the component dispatch "deleteCity" with id and openWeatherCityId in params', () => {
    const city = { id: 42, name: 'adele', openWeatherCityId: 43 }
    const { container } = render(<CityTag dispatch={store.dispatch} city={city}/>)
    
    fireEvent.click(container.querySelector('.delete'))

    expect(mockDeleteCity.mock.calls.length).toBe(1)
    expect(mockDeleteCity.mock.calls[0][0]).toBe(city.id)
    expect(mockDeleteCity.mock.calls[0][1]).toBe(city.openWeatherCityId)
  })
})