

import './css/achat.css'
import Button4 from "../buttons/button4";
import { Titem } from '../../libs/type';

export default function Achat({item, panier, setPanier} : {item : Titem, panier : Titem[] | [], setPanier : (panier : Titem[] | [])=>void}) {

  return (
    <div className="achat-cont0">
      <Button4 type={'-'} item={item} panier={panier} setPanier={setPanier}/>
      <p className='achat-qte'>{item.qte}</p>
      <Button4 type={'+'} item={item} panier={panier} setPanier={setPanier}/>
      <p className='designation'>{item.name}</p>
      <p className='achat-total'>{item.total?.toFixed(2) + ' €'}</p>
    </div>
  )
}
