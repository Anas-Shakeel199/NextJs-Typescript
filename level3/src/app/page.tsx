"use client"
import Btn from '@/Btn'
import React, { useState } from 'react'

function page() {

  const [count, setcount] = useState<number>()
  function names() {
    
  }
  return (
    <div>
      <Btn data = "Anas chaudhry" action = {names}/>
    </div>
  )
}

export default page