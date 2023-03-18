import React from 'react'
import Router from './routes/Router'
import Provider from './context/Provider'

const App = () => {
  return (
    <>
    <Provider>
      <Router />
    </Provider>
    </>
  )
}

export default App