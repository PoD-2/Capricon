import React from 'react'
import Logo from '../../images/capcricon.png';

function LoadingScreen() {
    return (
        <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <img
          src={Logo}
          width="200"
          height="120"
          className="image"
          alt="capricon logo"
        />
        <div>
        <span className="spinner-grow spinner-grow-sm mr-1"></span><span>Loading...</span>
        </div>
        </div>
    )
}

export default LoadingScreen
