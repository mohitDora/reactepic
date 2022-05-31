import React from "react";
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer'
import './index.css'
import Moviedata from "./Moviedata";
import Card from './Components/Card'
import Btn from "./Components/Btn";
 export default function App(){
    const movies=Moviedata.map(x=>{
        return(
            <Card img={x.img} name={x.name} rating={x.rating}
            ></Card>
        )
    }) 

    return(
        <>
        <div className="cardcon">
            {movies}
          
        </div>
        <Btn></Btn>
        </>
    )
}