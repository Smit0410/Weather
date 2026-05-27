import React, {useContext} from 'react'
import wp_context from '../Context/Context'

const Name_wp = () => {
  const {cityName} = useContext(wp_context)
  const {countryName} = useContext(wp_context)
  const real_date = 
  new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
  
  return (
    <div id='city-name' className='lg:h-28 text-center lg:text-start flex flex-col justify-end py-2'>
        <h1 className='font-bold text-4xl lg:text-5xl'>{cityName}, {countryName}</h1>
        <p className=' lg:text-2xl'>{real_date}</p>
    </div>
  )
}

export default Name_wp
