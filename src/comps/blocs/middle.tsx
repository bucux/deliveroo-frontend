

import { useEffect, useState } from 'react'
import { Tdatas, TsectionData } from '../../libs/type'
import './css/middle.css'
import Panier from './panier'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'

export default function Middle({datas} : {datas : Tdatas}) {

  // const [section2Datas, setSection2Datas] = useState<TsectionData[]>([])
  // const [section2Datas, setSection2Datas] = useState<TsectionData[]>([])
  const [section3Datas, setSection3Datas] = useState<TsectionData[]>([])

  const initSection3Datas = () => {
    const newSection3Datas = []
    for(const categorie of datas.meta.categories){ 
      const sectionData = {
        categorie: categorie,
        items: datas.items.filter(item=>item.categoryId === categorie.id)
      }
      newSection3Datas.push(sectionData)
    }
    setSection3Datas(newSection3Datas)
  }

  useEffect(()=>{
    initSection3Datas()
  }, [])

  return (
    <div className='middle-cont0'>
      <div className='middle-cont1'>
        <Section1/>
        <Section2/>
        {section3Datas.map((section3Data, index)=><Section3 key={index} sectionDatas={section3Data}/>)}
      </div>
      <div className='middle-cont2'>
        <Panier/>
      </div>
    </div>
  )
}
