import { log } from 'console'
import React from 'react'

async function page() {

  // ssr
  let response = await fetch("http://localhost:3000/api/user", {
    cache: "no-store"
  })
  let data = await response.json()
  console.log(data)

  //ssg Bydefault ya ssg he use kerta han 
  let response2 = await fetch("http://localhost:3000/api/user", {
    cache: "force-cache"
  })
  let data2 = await response2.json()
  console.log(data2)


  //ssg Bydefault ya ssg he use kerta han 
  let response1 = await fetch("http://localhost:3000/api/user", {
    cache: "force-cache"
  })
  let data1 = await response1.json()
  console.log(data1)

   //ssg Bydefault ya ssg he use kerta han 
  let response3 = await fetch("http://localhost:3000/api/user", {
    next: {revalidate: 10}// 10 sec baad ya automicallty api call kara ga 
  })
  let data3 = await response3.json()
  console.log(data3)


  return (
    <div>page</div>
  )
}

export default page