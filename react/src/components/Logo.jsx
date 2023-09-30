import React, { Component } from 'react';
import imagen from '../assets/react.svg'
const Logo = () =>{
    const divStyle = {
        display: "flex",
        marginTop: "5px",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <div className="row">
            <div className="logo" style={divStyle}>
                <img src={imagen} width="80%" height="50%"/>
            </div>
        </div>
    );
}

export default Logo;