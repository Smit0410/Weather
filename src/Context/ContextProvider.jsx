import React, { useState } from 'react'
import wp_context from './Context'

const ContextProvider = ({children}) => {
    const [cityName,setCityName] = useState('City')
    const [countryName,setCountryName] = useState('Country')
    const [temp,setTemp] = useState('--')
    const [maxTemp,setMaxTemp] = useState('--')
    const [minTemp,setMinTemp] = useState('--')
    const [deg,setDeg] = useState('--')
    const [speed,setSpeed] = useState('--')
    const [sunrise,setSunrise] = useState('--')
    const [sunset,setSunset] = useState('--')
    const [icon,setIcon] = useState('--')
    const [list,setList] = useState([])
    const [forIcon,setForIcon] = useState('--')

  return (
    <wp_context.Provider value={{cityName,setCityName,countryName,setCountryName,temp,setTemp,maxTemp,setMaxTemp,minTemp,setMinTemp,deg,setDeg,speed,setSpeed,sunrise,setSunrise,sunset,setSunset,icon,setIcon,list,setList,forIcon,setForIcon}}>
        {children}
    </wp_context.Provider>
    
  )
}

export default ContextProvider
