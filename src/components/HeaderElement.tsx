import React, { PropsWithChildren, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import logo from '../images/logo.jpg';

const HeaderElement = ():JSX.Element => {
    const [today, setToday] = useState(new Date().toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }));
    const colorTheme = useSelector((state: RootState) => state.colorTheme.value);

    const headerElement = {
        backgroundImage: colorTheme ? 'linear-gradient(to right, #002855, #0353A4, #0353A4, #002855)' : 'linear-gradient(to right, #E2EAFC, #B6CCFE, #B6CCFE, #E2EAFC)',
        color: colorTheme ? 'white' : 'black',
        height: '100px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'all .5s',
    }

    return (
        <div style={headerElement} className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
                <div className="ms-1" style={backgroundLogoStyle}></div>
                <div className="ms-3" style={sideEffect}></div>
                <h1 className="align-self-center">Task Tour</h1>
            </div>

            <div className="d-flex">
                <div style={sideEffect}></div>
                <div style={timeStyle} className="p-2">{today}</div>
            </div>

            
        </div>
    )
}

const sideEffect = {
    width: '10px',
    height: 'auto',
    backgroundColor: '#EC214E',
    borderRadius: '10px 0 0 10px',
    marginRight: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
}

const timeStyle = {
    fontSize: '25px',
    fontWeight: 'bold'
}

const backgroundLogoStyle = {
    backgroundImage: `url(${logo})`, 
    backgroundPosition: 'center',  
    backgroundSize: '100% 100%', 
    width: '80px', 
    height: '80px',
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
}

export default HeaderElement;