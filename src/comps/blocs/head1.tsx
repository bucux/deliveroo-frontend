

import Button1 from '../buttons/button1'
import './css/head1.css'

export default function Head1() {
  return (
    <div className='head1-cont0'>
      <div className='centreur'>
        <img src="" alt="logo de Deliveroo" />
        <input type="text" placeholder='Chercher Subway - Rambuteau'/>
        <div className='head1-cont1'>
          <Button1 value={'0.00€'}/>
          <Button1 value={'Inscription ou connexion'}/>
          <Button1 value={'Votre compte'}/>
        </div>
      </div>
    </div>
  )
}
