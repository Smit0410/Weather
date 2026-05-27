import { CloudSun, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog } from 'lucide-react'
import React,{useContext} from 'react'
import wp_context from '../Context/Context'

const Temp_wp = () => {

  const {temp} = useContext(wp_context)
  const {maxTemp} = useContext(wp_context)
  const {minTemp} = useContext(wp_context)
  const {deg} = useContext(wp_context)
  const {speed} = useContext(wp_context)
  const {sunrise} = useContext(wp_context)
  const {sunset} = useContext(wp_context)
  const {icon} = useContext(wp_context)
  
  let weatherIcon;
  if(icon=="Smoke"){
    weatherIcon = <CloudSun className='text-5xl size-30'/>
    console.log("Smoke");
  }
  else if(icon=="Clear"){
    weatherIcon = <Sun className='text-5xl size-30'/>
  }
  else if(icon=="Clouds"){
    weatherIcon = <Cloud className='text-5xl size-30'/>
  }
  else if(icon=="Rain"){
    weatherIcon = <CloudRain className='text-5xl size-30'/>
  }
  else if(icon=="Snow"){
    weatherIcon = <CloudSnow className='text-5xl size-30'/>
  }
  else if(icon=="Thunderstorm"){
    weatherIcon = <CloudLightning className='text-5xl size-30'/>
  }
  else if(icon=="Haze"){
    weatherIcon = <CloudFog className='text-5xl size-30'/>
  }
  else{
    weatherIcon = <Cloud className='text-5xl size-30'/>
  }
  
  let arr = [
    {box_ans : maxTemp +'°',box_name: 'High'},
    {box_ans : deg + ' deg',box_name: 'Wind'},
    {box_ans : sunrise,box_name: 'Sunrise'},
    {box_ans : minTemp +'°',box_name: 'Low'},
    {box_ans : speed +'m/s',box_name: 'Speed'},
    {box_ans : sunset,box_name: 'Sunset'}]

  return (
    <div id='temp-more' className=' lg:flex'>
        <div id='icon-temp' className='flex text-center justify-center gap-6 lg:w-[50%]'>
          {weatherIcon}
          <div>
            <p className='text-6xl lg:text-8xl'>{temp}<sup>°</sup></p>
            <p className='lg:text-2xl mt-7'>Over cast Cloud</p>
          </div>
        </div>
        <div id='dif-box' className=' lg:w-[50%] text-center  grid grid-cols-2 lg:grid-cols-3 gap-0.5'>
          {
            arr.map((ele)=>{
              return(
                <div className='hover:bg-[#9692926e] bg-[#5e57573f] border rounded p-3 items-center flex flex-col justify-center'>
                  <span className=' text-2xl'>{ele.box_ans}</span>
                  <p>{ele.box_name}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Temp_wp
