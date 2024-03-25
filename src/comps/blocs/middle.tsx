

import './css/middle.css'
import Panier from './panier'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'

export default function Middle() {
  return (
    <div className='middle-cont0'>
      <div className='middle-cont1'>
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
      <div className='middle-cont2'>
        <Panier/>
      </div>
    </div>
  )
}
