
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
      const response = await axios.get('http://127.0.0.1:3200')
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
