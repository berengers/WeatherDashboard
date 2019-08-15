import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

jest.mock('../api/db', () => {})

afterEach(cleanup)


function reducer(state = {}, action) {
  return state
}

export function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}



// import React from 'react'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { render } from '@testing-library/react'

// function reducer(state = {name : 45}, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1,
//       }
//     case 'DECREMENT':
//       return {
//         count: state.count - 1,
//       }
//     default:
//       return state
//   }
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
// )

// export function renderWithRedux(
//   ui,
//   { initialState, store = createStore(reducer, applyMiddleware(thunk)) } = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{ui}</Provider>),
//     store,
//   }
// }


// export function renderRouterWithRedux(
//   ui,
//   { initialState, store = createStore(reducer, initialState) } = {},
//   route = '/',
//   history = createMemoryHistory({ initialEntries: [route] }),
// ) {
//   return {
//     ...render(
//       <Provider store={store}>
//         <Router history={history}>
//           {ui}
//         </Router>
//       </Provider>
//     ),
//     store,
//     history,
//   }
// }



// function renderWithRouter(
//   ui,
//   {
//     route = '/',
//     history = createMemoryHistory({ initialEntries: [route] }),
//   } = {}
// ) {
//   return {
//     ...render(<Router history={history}>{ui}</Router>),
//     history,
//   }
// }

// export function renderRouterInRedux(
//   ui,
//   { initialState, store = createStore(reducer, initialState) } = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{renderWithRouter(ui)}</Provider>),
//     store,
//   }
// }
