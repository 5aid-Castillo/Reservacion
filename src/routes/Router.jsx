import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home';
import Form from '../components/Form';

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/Reservaciones/' element={<Home />}/>
            <Route path='/form' element={<Form />}/>
            {/* <Route path='*' element={<Home />}/> */}
        </Routes>
    </>
  )
}

export default Router