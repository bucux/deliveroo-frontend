

import { Titem, TsectionData } from '../../libs/type'
import Article2 from './article2'
import './css/section3.css'

export default function Section3({sectionDatas, panier, setPanier} : {sectionDatas : TsectionData, panier: Titem[] | [], setPanier : (panier : Titem[] | []) => void}) {
  return (
    <div className='section3-cont0'>
      <h2>{sectionDatas.categorie.name}</h2>
      <div className='section3-cont1'>
        {sectionDatas.items.map(item=> <Article2 key = {item.id} item={item} panier={panier} setPanier={setPanier}/> )}
      </div>
    </div>
  )
}
