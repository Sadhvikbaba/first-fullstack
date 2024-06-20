import React from "react";
import logoImg from "../assets/logoImg.png"

function Logo({width = "100"}){
    return <img src={logoImg} alt="LOGO"  width={width} height={100} />
}

export default Logo
