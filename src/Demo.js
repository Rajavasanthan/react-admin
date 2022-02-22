import React, { useEffect, useState } from 'react'

function Demo() {
    const [timer,setTimer] = useState(0)
    
    useEffect(() => {
      console.log("On Mount")
    }, [])
    
    let handleCounter = () => {
        setTimer(timer + 1)
    }
  return (
    <>
    <div>{timer}</div>
    <button onClick={handleCounter}>Inc</button>
    </>
  )
}

export default Demo