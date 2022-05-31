import React from "react";
import "./card2.css"
import Card2temp from "./Card2temp";
import gamedata from "./Gamesdata"
import Navgametemp from "./Navgametemp";
import "./navgame.css"

export default function Card2() {
    const [gamedatafinal, func] = React.useState(gamedata);

    const uniqueType = ["All", ...new Set(gamedata.map((item) => {
        for (var i = 0; i < item.type.length; i++) {
            return (item.type[i])
        }
    }))]
    const [navbaritem, funcnav] = React.useState(uniqueType);
    const listOfNavItem = navbaritem.map((items) => {
        return (
            <Navgametemp type={items} click={funcitem}></Navgametemp>
        )
    })


    const gamelist = gamedatafinal.map((data) => {
        return (
            <Card2temp img={data.img} name={data.name} price={data.price}></Card2temp>
        )
    })
    function funcitem(x) {
        var updatedlist = gamedata.map((items) => {
            for (var i = 0; i < items.type.length; i++) {
                if (items.type[i] === x.type) {
                    return (
                        items
                    )
                }
            }
        })
        updatedlist = updatedlist.filter((ele) => {
            return ele !== undefined;
        })
        func(updatedlist)
    }
    
    return (
        <>
            <div className="navitemcon">
                {listOfNavItem}

            </div>
            <div className="cardcon2">
                {gamelist}
            </div>
        </>
    )
}