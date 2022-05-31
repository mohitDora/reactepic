import React,{useState} from 'react';
// import './Navbar.css';
function Navbar() {
    const [showmedia,setmedia]=useState(false);
  return (
    <header className={showmedia?'move':""}>
        <div className='brandName'>Mohit</div>
        <ul className='move'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#" className='active'>Join Us</a></li>
        </ul>
        <div className='ham' onClick={()=>setmedia(!showmedia)}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </header>
    
  )
}

export default Navbar