import React from "react";
import Gamesdata from "./Gamesdata";

export default function Card2temp({img,name,price,add}){
    const [btntext,funcbtn]=React.useState("Add to cart")
    function add(e){
        funcbtn("Added");
        console.log(e.target)
    }
   
    return(
        <div className="con">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="cartbtn" onClick={add}>{btntext}</div>
        </div>
    )
}