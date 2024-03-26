

import { useEffect, useState } from 'react'
import { Tdatas, Titem, TsectionData } from '../../libs/type'
import './css/middle.css'
import Panier from './panier'
import Section1 from './section1'
import Section3 from './section3'

export default function Middle({datas, panier, setPanier} : {datas : Tdatas, panier: Titem[] | [], setPanier: (panier : Titem[] | []) => void}) {

  const [section2Data, setSection2Data] = useState<TsectionData>() // il n'y a que 1 sectionData pour lunique section 2
  const [section3Datas, setSection3Datas] = useState<TsectionData[]>([]) // tandis qu'il y a un tableau de sectionDatas pour les section 3

  const initSection2Data = () => {
    for(const categorie of datas.meta.categories){ 
      const sectionData = {
        categorie: categorie,
        items: datas.items.filter(item=>item.categoryId === categorie.id)
      }
      setSection2Data(sectionData)
    }
  }

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
    initSection2Data()
    initSection3Datas()
  }, [])

  if(section2Data) {
    return (
      <div className='middle-cont0'>
        <div className='centreur'>
          <div className='middle-cont1'>
            <Section1/>
            {/* <Section2 sectionDatas={section2Data}/> */}
            {section3Datas.map((section3Data, index)=><Section3 key={index} sectionDatas={section3Data} panier={panier} setPanier={setPanier}/>)}
          </div>
          <div className='middle-cont2'>
            <Panier panier={panier} setPanier={setPanier}/>
          </div>
        </div>
      </div>
    )
  } else{ return null}
}
