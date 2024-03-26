


import { useEffect, useState } from 'react'
import { Titem } from '../../libs/type'
import Achat from './achat'
import './css/panier.css'

export default function Panier({panier, setPanier} : {panier: Titem[] | [], setPanier: (panier: Titem[] | [])=>void}) {
  
  const [sousTot, setSousTot] = useState('')
  const [tot, setTot] = useState('')

  const somme = () => {
    let total = 0
    for(const item of panier){total += item.total!}
    setSousTot(total.toFixed(2) + ' €')
    total += 2.5
    setTot(total.toFixed(2) + ' €')
  }

  useEffect(()=>{
    somme()
  }, [panier])

  return (
    <div className='panier-cont0'>
      <button id="button-valider">Valider mon panier</button>
      <div className='panier-cont1'>
        {panier.length === 0
          ? <p id='panier-vide'>Panier vide</p>
          : panier.map(item=><Achat key={item.id} item={item} panier={panier} setPanier={setPanier}/>)
        }
      </div>
      <div className='panier-cont2'>
        <div className='panier-cont3'>
          <div className='panier-total'>
            <p>Sous-total</p>
            <p>{sousTot}</p>
          </div>
          <div className='panier-total'>
            <p>Frais de livraison</p>
            <p>2.50 €</p>
          </div>
        </div>
        <div className='panier-total total-general'>
          <p>Total</p>
          <p>{tot}</p>
        </div>
      </div>
    </div>
  )
}
