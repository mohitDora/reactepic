// import React from "react";
// import Navgametemp from "./Navgametemp";
// import "./navgame.css"
// import Gamesdata from "./Gamesdata";

// export default function Navgame() {
//     const uniqueType = [...new Set(Gamesdata.map((item) => {
//         for (var i = 0; i < item.type.length; i++) {
//             return (item.type[i])
//         }
//     }))]
//     const [navbaritem, funcnav] = React.useState(uniqueType);
//     const listOfNavItem = navbaritem.map((items) => {
//         return (
//             <Navgametemp type={items} ></Navgametemp>
//         )
//     })
   
//     return (
//         <div className="navitemcon">
//             {listOfNavItem}

//         </div>
//     )
// }