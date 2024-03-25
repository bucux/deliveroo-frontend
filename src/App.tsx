
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './comps/blocs/header'
import Footer from './comps/blocs/footer'
import { Tdatas } from './libs/type'
import Middle from './comps/blocs/middle'

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
      // console.log(response.data.header.title)
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
      <Middle/>
      <Footer/>
    </div>
  )
}

export default App
