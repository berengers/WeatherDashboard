import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux } from '../__test__/configure'
import InputToggle from './InputToggle'


describe('InputToggle', () => {
  
  describe('Wind case', () => {
    const props = {
      value: null,
      cb: () => {},
      userParams: { }
    }
    
    it('No "disable" class with value true', () => {
      props.value = true
      const { container } = renderWithRedux(
        <InputToggle {...props} />)
      const element = container.querySelector('.toggle')

      expect(element.className).not.toContain('disable')
    })

    it('"disable" class with value false', () => {
      props.value = false
      const { container } = renderWithRedux(
        <InputToggle {...props} />)
      const element = container.querySelector('.toggle')

      expect(element.className).toContain('disable')
    })
  })
})