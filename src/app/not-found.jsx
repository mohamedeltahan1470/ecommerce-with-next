import React from 'react'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

export default function notFound() {
  return (
    <div style={{
        height:" 100vh",
        display:" grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}>
       <Header/>
       <main style={{textAlign:"center"}}> 
        <p style={{fontSize:"1.9rem" , fontWeight:"700"}}>Soory,</p>
        <p style={{fontSize:"1.8rem" , fontWeight:"400"}}>we could not find the page you were looing for:(</p>
       </main>
       <Footer/>
    </div>
  )
}
