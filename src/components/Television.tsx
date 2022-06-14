import React from 'react';
import {useScript} from '../hooks/useScript';
import {Screen} from '../assets/scripts/television.js';
import logo from '../assets/img/Final-Show-Logo.svg';
import ehb from '../assets/img/EhB-logo.png';
import button from '../assets/img/tvdial.png';
import Countdown from "react-countdown";

function Television(){
    const renderer = (props:any) => { 
        return(
            <>
                <span>{props.formatted.days} days</span>
                <span>{props.formatted.hours}:{props.formatted.minutes}:{props.formatted.seconds}</span>
            </>
        )
    };
      
    return(
    <div className="countDownPageContainer">
        <div className="homepageLogoContainer">
                <div className="logoContainer">
                    <img src={logo} alt="Final Show Logo" />
                </div>
                <div className="logoContainer" id="ehbLogoContainer">
                    <img className='ehbLogo' src={ehb} alt="" />
                </div>
        </div>
        <div className="televisionContainer">
            <div id="television">
                <div className="screen">
                    <Countdown date={new Date(2022,5,24,19,0,0,0)}
                    zeroPadTime={2} 
                    renderer={renderer}
                    />
                </div>
                <div className="screenOverlay">
                </div>
                <div className="televisionFrame">
                </div>
            </div>
        </div>
    </div>
    )
}

export {Television}