import React from "react";

export default function Stopwatch(){
    const [def,func]=React.useState(false);
    const [swatch,func1]=React.useState("00 : 00");
    var sec;
    var min;
    var time=0;
    var ftime;
    var functime;
    var istrig=false;
    function settime(){
        time+=1;
        sec=time%60;
        min=Math.floor(time/60);
        if(sec<10){
            sec=`0${sec}`
        }
        if(min<10){
            min=`0${min}`
        }
        ftime=`${min} : ${sec}`;
        console.log(ftime)
        func1(ftime);
    }
    function change(){       
         func(!def);
         istrig=true;
       
         clearInterval(functime);
            functime=setInterval(settime,1000)
        
        }
   function reset() {
    clearInterval(functime);
    istrig=false;
    console.log("pre")
       
   }
    return(
        <div>
        <div className="swatch">{swatch}</div>
        <div onClick={reset}>reset</div>
        <div onClick={change}>{def?"stop":"start"}</div>
        </div>
    )
}