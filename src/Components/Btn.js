import React from 'react'

export default function Btn() {
  
    const [def,setchanges]=React.useState(true);
    
    // const array = def;
    // function change() {
    //     let vary = array.length;
    //     array.push(vary+1);
    //     const newarr=array.slice(0);
    //     console.log(array);
    //     console.log(newarr);
    //     setchanges(newarr)
    // }
    // const arrayfinal = array.map(item => {
    //     return (
    //         <p>{item}</p>)
    // })
    let isyes;
    function minus(){
       setchanges(!def);
        
       
    }
    function plus(){
        setchanges(def+1);
     
    }
    return (
        <>
            <div onClick={minus}>-</div>
            <div onClick={plus}>+</div>
            <div>{def?"yes":"no"}</div>
        </>
    )
}

