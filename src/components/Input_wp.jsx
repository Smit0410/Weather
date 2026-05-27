import axios from 'axios'
import { Search } from 'lucide-react'
import React, { useState, useContext, useRef } from 'react'
import wp_context from '../Context/Context'
const api = import.meta.env.VITE_API_KEY

const Input_wp = () => {

  const inputRef = useRef(null);

  const [ city , setCity] = useState('')
  const {setCityName} = useContext(wp_context)
  const {setCountryName} = useContext(wp_context)
  const {setTemp} = useContext(wp_context)
  const {setMaxTemp} = useContext(wp_context)
  const {setMinTemp} = useContext(wp_context)
  const {setDeg} = useContext(wp_context)
  const {setSpeed} = useContext(wp_context)
  const {setSunrise} = useContext(wp_context)
  const {setSunset} = useContext(wp_context)
  const {setIcon} = useContext(wp_context)
  const {setList} = useContext(wp_context)
  const {setForIcon} = useContext(wp_context)


  const handle_name = async (e) => {

    if(e.key == 'Enter'){
      if(city==''){
        alert('Pls! Enter City')
      }
      else{
        try{
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
          
          const data = response.data;
          const timing_sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
          const timing_sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString()

          setCityName(data.name)
          setCountryName(data.sys.country)
          setTemp(data.main.temp)
          setMaxTemp(data.main.temp_max)
          setMinTemp(data.main.temp_min)
          setDeg(data.wind.deg)
          setSpeed(data.wind.speed)
          setSunrise(timing_sunrise)
          setSunset(timing_sunset)
          setIcon(data.weather[0].main)
          
        }
        catch(error){
          setCityName(error.response.data.message)
          setCountryName(error.response.data.cod)
          setTemp('--')
          setMaxTemp('--')
          setMinTemp('--')
          setDeg('--')
          setSpeed('--')
          setSunrise('--')
          setSunset('--')
          setIcon('--')
        }
        try{
          const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`)
          setList(forecast.data.list)
          setForIcon(forecast.data.list[0].weather[0].main)
        }
        catch(error){
          setList([])
        }
      }
    }
    
  }

  const city_input = async () => {
    inputRef.current.focus()
  }
  return (
    <div id='city-input' className=' w-full text-center flex justify-center items-center'>
        <button
        onClick={city_input}
        className='bg-[#b6b2b260] p-2.5 lg:h-10 rounded-l-full active:scale-95 cursor-pointer '><Search className='size-5'/></button>

        <input
        ref={inputRef}
        value={city}
        onKeyDown={handle_name}
        onChange={(e)=>{
          setCity(e.target.value)
        }}
        type="search" name="" id="" autoFocus spellCheck={false} 
        className='[&::-webkit-search-cancel-button]:filter-[grayscale(1)] bg-[#ffffff60]  h-10 focus:outline-none font-bold p-1 rounded-r-full w-[40%] my-2' placeholder='Enter City...🌍'/>
    </div>
  )
}

export default Input_wp
