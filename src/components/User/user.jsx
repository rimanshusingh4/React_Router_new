import React from 'react'
import { useParams } from 'react-router-dom'
function user() {
    const {userid} = useParams()
  return (
    <div className='bg-red-700 rounded-xl my-2 text-white font-bold text-3xl p-5 w-full'>user : {userid}</div>
  )
}

export default user