


import { Theader } from '../../libs/type'
import Button2 from '../buttons/button2'
import './css/head2.css'

export default function Head2({header} : {header : Theader}) {
  return (
    <div className='head2-cont0'>
      <div className='centreur'>
        <img id = 'image-principale' src={header.image.url} alt="image principale" />
        <div className='head2-cont1'>
          <h1>{header.title}</h1>
          <div className='head2-cont11'>
            {header.headerTags.lines.map((line, index1)=>(
              <div key = {index1} className='head2-cont111'>
                {line.spans.map((span, index2)=><p key = {index2}>{span.text}</p>)}
              </div>
            ))}
          </div>
        </div>
        <div className='head2-cont2'>
          <div className='head2-cont21'>
            <img src={''} alt="transport" />
            <p>Livrée dans 15 - 25min</p>
            <Button2 name={'Modifier'}/>
          </div>
          <button id="button-groupe">Démarrer une commande groupée</button>
        </div>
      </div>
    </div>
  )
}
