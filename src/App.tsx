
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
      setDatas(response.data)
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
    datas
      ?
      <div className='app-cont0'>
        <Header datas={datas}/>
        <Middle datas={datas}/>
        <Footer/>
        <p>{datas.header.title}</p>
      </div>
      :
      null
  )
}

export default App
