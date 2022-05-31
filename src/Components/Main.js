import React from "react"
import img from './logo192.png'
import './main.css'

export default function Main(){
    return(
        <div>
        <h1>Main goes here</h1>
        <ul>
            <li>Mohit</li>
            <li>mnwcww</li>
            <li>wwcw</li>
        </ul>
        <img src={img} alt="" className="img" />
        </div>
    )
}