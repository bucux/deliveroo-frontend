


import { Tcategorie } from '../../libs/type'
import Button2 from '../buttons/button2'
import './css/head3.css'

export default function Head3({categories} : {categories : Tcategorie[]}) {
  return (
    <div className='head3-cont0'>
      <div className='centreur'>
        {categories.map(categorie=><Button2 key={categorie.id} id={categorie.id} name={categorie.name}/>)}
      </div>
    </div>
  )
}
