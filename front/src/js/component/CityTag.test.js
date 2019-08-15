import React from 'react'
// import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux } from '../__test__/configure'
import CityTag from './CityTag'


describe('CityTag', () => {
  
  it('display the name of the city', () => {
    const city = { name: 'adele' }
    const { getByText, container } = renderWithRedux(<CityTag city={city}/>)

    expect(container).toContainElement(getByText(city.name))
  })

  test.todo('Config middleware for dispatch actions')
  // it('delete when click to delete button', () => {
  //   const city = { name: 'adele' }
  //   const { debug, getByText, container } = renderWithRedux(<CityTag city={city}/>)
  //   debug(container)
  //   fireEvent.click(container.querySelector('.delete'))
  //   debug(container)

  //   expect(container)
  // })
})