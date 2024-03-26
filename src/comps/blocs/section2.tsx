


import { TsectionData } from '../../libs/type'
import Article1 from './article1'
import './css/section2.css'

export default function Section2({sectionDatas} : {sectionDatas : TsectionData}) {
  return (
    <div className='section3-cont0'>
      <h2>{sectionDatas.categorie.name}</h2>
      <div className='section3-cont1'>
        {sectionDatas.items.map(item=> <Article1 key = {item.id} item={item}/> )}
      </div>
    </div>
  )
}