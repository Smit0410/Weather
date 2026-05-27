import { CloudSun, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog } from 'lucide-react'
import React,{useContext} from 'react'
import wp_context from '../Context/Context'

const Forecast = () => {

  const {list} = useContext(wp_context)
  const {forIcon} = useContext(wp_context)

  console.log(list);
  return (
    <div id='forecast' className='mt-6 flex flex-col'>
      <h2 className='text-2xl mb-4'>Forecast :</h2>

      <div id='time-boxs' className='bg-[#11111159] p-1 border h-96 grid grid-cols-2 min-[395px]:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 overflow-y-auto scrollbar-thumb-sky-200 scrollbar-track-[#ffffff3f]'>
      {
        list?.map((ele,idx)=>{
          return(
            <div key={idx} className='flex flex-col justify-around items-center  min-w-32 w-32 mb-3 h-36 border hover:bg-[#9692926e] rounded text-center bg-[#5e57573f]'>
              <div>
                <span >{ele.dt_txt}</span><br />
              </div>
              {
                ele.weather[0].main=="Clear" ? <Sun/>: ele.weather[0].main=="Smoke" ? <CloudSun/>: ele.weather[0].main=="Clouds" ? <Cloud/>: ele.weather[0].main=="Rain" ? <CloudRain/>: ele.weather[0].main=="Snow" ? <CloudSnow/>:ele.weather[0].main=="Thunderstorm" ? <CloudLightning/>: ele.weather[0].main=="Haze" ? <CloudFog/>:ele.weather[0].main=="clear" ? <Sun/>:ele.weather[0].main=="clear" ? <Sun/>:<Cloud/>
              }
              <span >{ele.main.temp}<sup>°</sup> </span>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Forecast
