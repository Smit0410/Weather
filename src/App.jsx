import React, { useState } from 'react'
import Title_wp from './components/Title_wp'
import Input_wp from './components/Input_wp'
import Name_wp from './components/Name_wp'
import Temp_wp from './components/Temp_wp'
import Forecast from './components/Forecast'
import ContextProvider from './Context/ContextProvider'

const App = () => { 
  return (
    <ContextProvider>
      <div className=' text-white p-1' >
        <Title_wp/>              
        <Input_wp/>
        <Name_wp/>
        <Temp_wp/>
        <Forecast/>
      </div>
    </ContextProvider>
  )
}

export default App
