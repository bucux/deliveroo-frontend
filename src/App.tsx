
import { useEffect, useState } from 'react'
import './App.css'

import Header from './comps/blocs/header'
import Footer from './comps/blocs/footer'
import { Tdatas, Titem } from './libs/type'
import Middle from './comps/blocs/middle'
import { fetchAxios } from './libs/fetch'

function App() {

  const [datas, setDatas] = useState<Tdatas>()
  const [panier, setPanier] = useState<Titem[] | []>([])

  const fetchData = async() => {
    const reponse = await fetchAxios()
    setDatas(reponse)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    datas
      ?
      <div className='app-cont0'>
        <Header datas={datas}/>
        <Middle datas={datas} panier={panier} setPanier={setPanier}/>
        <Footer/>
        <p>{datas.header.title}</p>
      </div>
      :
      null
  )
}

export default App
