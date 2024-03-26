
import { Titem } from '../../libs/type'
import Button3 from '../buttons/button3'
import './css/article2.css'

export default function Article2({item, panier, setPanier} : {item : Titem, panier : Titem[] | [], setPanier : (panier : Titem[] | []) => void}) {

  return (
    <div className='article2-cont0'>
      <div className='article2-cont1'>
        <h3>{item.name}</h3>
        <p className='article2-description'>{item.description}</p>
        <p>{item.price.formatted}</p>
      </div>
      {item.image 
        ?
        <img src={item.image.url} alt={item.image.altText} />
        :
        null
      }
      <Button3 item = {item} panier={panier} setPanier={setPanier}/>
    </div>
  )
}
