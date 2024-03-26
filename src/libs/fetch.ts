

import axios from 'axios'

export const fetchAxios = async() => {
  try{
    const url = window.location.hostname === "localhost" || window.location.hostname.startsWith("127.0.0.1") 
      ?
      'http://127.0.0.1:3200' 
      :
      'https://site--bonus-version--bb5k82pfcwdc.code.run/' // url de northflank
    const response = await axios.get(url)
    return response.data
  }catch(error){
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

