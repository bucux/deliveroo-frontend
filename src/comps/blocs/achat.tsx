

import './css/achat.css'
import Button4 from "../buttons/button4";

export default function Achat() {
  return (
    <div className="achat-cont0">
      <Button4 type={'-'}/>
      <p>1</p>
      <Button4 type={'+'}/>
      <p className='designation'>Brunch Vegan</p>
      <p>24,50€</p>
    </div>
  )
}
