

import { TsectionData } from '../../libs/type'
import Article2 from './article2'
import './css/section3.css'

export default function Section3({sectionDatas} : {sectionDatas : TsectionData}) {
  return (
    <div className='section3-cont0'>
      <div className='centreur'>
        <h3>{sectionDatas.categorie.name}</h3>
        <div className='section3-cont1'>
          {sectionDatas.items.map(item=> <Article2 key = {item.id} item={item}/> )}
        </div>
      </div>
    </div>
  )
}
