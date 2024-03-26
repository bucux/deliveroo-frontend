


import Achat from './achat'
import './css/panier.css'

export default function Panier() {
  return (
    <div className='panier-cont0'>
      <button id="button-valider">Valider mon panier</button>
      <div className='panier-cont1'>
        <Achat/>
        //map liste
      </div>
      <div className='panier-cont2'>
        <div className='panier-cont3'>
          <div className='panier-total'>
            <p>Sous-total</p>
            <p>28,00€</p>
          </div>
          <div className='panier-total'>
            <p>Frais de livraison</p>
            <p>2,50€</p>
          </div>
        </div>
        <div className='panier-total'>
          <p>Total</p>
          <p>30,50€</p>
        </div>
      </div>
    </div>
  )
}
