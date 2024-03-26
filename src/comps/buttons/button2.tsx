


import './css/button2.css'

export default function Button2({name, id} : {name: string, id?: string}) { // utilisé dans Head3

  const clic = () => {
    console.log(id)
  }

  return (
    <button className='button2' onClick={clic}>{name}</button>
  )
}