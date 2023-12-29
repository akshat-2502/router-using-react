import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/akshat-2502').then(response => response.json()).then(data => {setData(data)})
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.repositories}
    </div>
  )
}

export default Github
