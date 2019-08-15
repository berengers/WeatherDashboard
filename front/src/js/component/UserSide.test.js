import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux, renderRouterWithRedux } from '../__test__/configure'
import UserSide from './UserSide'

jest.mock('../api/db', () => {})


describe('UserSide', () => {
  
  describe('API call', () => {
    const props = {
      history: { location: { pathname: './' } },
    }
    
    test.todo('Mock router in store for test this component')
    // it('Should execute the useEffext only when the pathname change', () => {
      // const { container, debug } = renderRouterWithRedux(
      //   <UserSide history={props.history} />,
      //   { initialState: { history: props.history } }
      // )

      // debug(container)
    // })
  })
})