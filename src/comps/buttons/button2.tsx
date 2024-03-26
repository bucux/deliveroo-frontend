

import { Tcategorie } from '../../libs/type'
import './css/button2.css'

export default function Button2(props : Tcategorie) {
  return (
    <div className='button2'>{props.name}</div>
  )
}