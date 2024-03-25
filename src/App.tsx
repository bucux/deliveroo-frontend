
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './comps/header'
import Footer from './comps/footer'
import Section1 from './comps/section1'
import { Tdatas } from './libs/type'

function App() {

  const [datas, setDatas] = useState<Tdatas>()

  const fetchData = async() => {
    try{
      const url = window.location.hostname === "localhost" || window.location.hostname.startsWith("127.0.0.1") 
        ?
        'http://127.0.0.1:3200' 
        :
        'https://site--bonus-version--bb5k82pfcwdc.code.run/' // url de northflank
      const response = await axios.get(url)
      // console.log(response.data)
      setDatas(response.data)
      console.log(response.data.header.title)
    }catch(error){
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className='app-cont0'>
      <p>{datas?.header.title}</p>
      <Header/>
      <Section1/>
      <Footer/>
    </div>
  )
}

export default App
