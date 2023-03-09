import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Test = () => {
    const [jony, setjony] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=> res.json())
        .then(res=>res.setjony())
    },[])

  

    // useEffect(() => {
    //     fetch("https://run.mocky.io/v3/bd0e9c4b-f774-4dc3-baa5-7226d73e4b56")
    //       .then((res) => res.json())
    //       .then((data) => setAllProduct(data))
    //   }, [])
  return (
    <div>
      
    </div>
  )
}

export default Test
