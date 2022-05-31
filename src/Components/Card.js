import React from "react";
import './main.css'

export default function Card({img,name,rating}){
    
    return(
        <div className="con">
            <div className="img">
            <img src={img}alt="" /></div>
            <h3>{name}</h3>
            <h4>{`IMDB : ${rating}`}</h4>
        </div>
    )           
}