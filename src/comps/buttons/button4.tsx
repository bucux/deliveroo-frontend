

import { stringToNumber } from '../../libs/fonctions'
import { Titem } from '../../libs/type'
import './css/button4.css'

export default function Button4({type, item, panier, setPanier} : {type : string, item: Titem, panier : Titem[] | [], setPanier : (panier : Titem[] | []) => void}) {
  
  const clic = () => {
    const prix = stringToNumber(item.price.formatted)
    const newPanier = [...panier]
    const itemIndex = panier.findIndex(ligne=>ligne.id === item.id)
    if(type === '+'){
      newPanier[itemIndex].qte! ++
      newPanier[itemIndex].total! += prix
    } else {
      newPanier[itemIndex].qte! --
      newPanier[itemIndex].total! -= prix
      if(newPanier[itemIndex].qte === 0){ // si qte devenue nulle, supprimer le produit du panier
        newPanier.splice(itemIndex, 1)
      }
    }
    setPanier(newPanier)
  }

  return (
    <button className="button4" onClick={clic}>{type}</button>
  )
}
