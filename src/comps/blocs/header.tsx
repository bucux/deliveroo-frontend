
import { Tdatas } from '../../libs/type'
import './css/header.css'
import Head1 from './head1'
import Head2 from './head2'
import Head3 from './head3'

export default function Header({datas} : {datas : Tdatas}) {
  return (
    <div className='header-cont0'>
      <Head1/>
      <Head2 header={datas.header}/>
      <Head3 categories={datas.meta.categories}/>
    </div>
  )
}
