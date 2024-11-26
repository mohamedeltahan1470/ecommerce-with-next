import React from 'react';
import "./home.css";

export default function Loading() {
  return (
    <div>
        <h1 style={{marginBlock: "9rem", display:"flex" , justifyContent:"center"}}>
        <span className="loader"></span>
        </h1>
    </div>
  )
}
