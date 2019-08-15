import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";

import { renderWithRedux } from '../__test__/configure'
import Login from './Login'


describe('Login', () => {
    test.todo("Check validation input")
    it('Can connect', () => {
      // const { container, debug, getByText } = renderWithRedux(
      //   <Login />,
      //   { initialState: { } })
      // const emailInput = container.querySelector('[type=email]')
      // debug(emailInput)

      // userEvent.type(emailInput, "Adele")

      // debug(emailInput)
      // expect(getByText("Adele")).toBeInTheDocument();
    })
})