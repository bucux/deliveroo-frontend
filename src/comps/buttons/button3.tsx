
import { stringToNumber } from '../../libs/fonctions'
import { Titem } from '../../libs/type'
import './css/button3.css'

export default function Button3({item, panier, setPanier} : {item : Titem, panier : Titem[] | [], setPanier : (panier : Titem[] | []) => void}) { // utilisé dans Article1 et Article2

  
  const clic = () => {
    const prix = stringToNumber(item.price.formatted)
    const newPanier = [...panier]
    const itemIndex = panier.findIndex(ligne=>ligne.id === item.id)
    if(itemIndex >= 0) { // le produit exite déjà dans le panier, incrémenter sa qté et son total
      newPanier[itemIndex].qte! ++
      newPanier[itemIndex].total! += prix
    } else { // sinon le créer
      const newItem = {...item} // clone
      newItem.qte = 1 // initialiser à 1 quantité
      newItem.total = prix // iniitialiser le total au prix d'une unité
      newPanier.push(newItem)
    }
    setPanier(newPanier)
  }

  return (
    <button className='button3' onClick={clic}>+</button>
  )
}