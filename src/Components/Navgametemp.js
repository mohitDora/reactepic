import React from "react";
import Gamesdata from "./Gamesdata";
import Card2 from "./Card2";

export default function Navgame({type,click}){
    // function funcitem(x){
        
    //     // if(x.type==="action")
    //     // {
    //     // console.log("hello")}
    //     const updatedlist=Gamesdata.map((items)=>{
    //         for(var i=0;i<items.type.length;i++){
    //             if(items.type[i]===x.type){
    //                 console.log(items.type[i]);
    //                 console.log(x.type);
    //                 console.log(items)
    //                 return(
    //                     items
    //                 )
                
    //             }
    //             else{
    //                 console.log("he")
    //             }
    //         }
    //     })
    //     console.log(updatedlist);
        
    // }
    return(
        <div onClick={()=>click({type})} className="navitem">{type}</div>
    )
}