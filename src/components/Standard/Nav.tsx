import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/Final-Show-Logo.svg';
import Animation from "../../Assets/finalshow_logo_animation_2.gif";
import '../../SCSS/Button.scss';
import '../../SCSS/Nav.scss';

function Nav(){
    const [open , setOpen] = useState(true)

    useEffect(() => {
        if (!open){
            (document.getElementById("close-button") as HTMLLabelElement).click()
        }
    },[open]);

    const pathName = useLocation().pathname

    if(pathName === "/detail"){
        return null
    }

    return(
        <div>
            <section className="navContainer">
                <Link to="/" className='routingLinks'>
                    <img className='logoFinalGroot static' src={Logo} alt="logo-final-show" />
                    <img id="activeGif" src={Animation} alt="animation-logo"/>
                </Link>

                <div className='ButtonsNav'>
                    <button className='uploadenBtn btn'>Uploaden</button>
                    <button className='stemmenBtn btn'>Stemming</button>
                    <button className='resultBtn btn'><Link to="/results" className='routingLinks'>Resultaten</Link></button>
                    <button className='searchBtn btn'><a href="https://finalshow.be/" target="_blank" className='routingLinks'>Platform</a></button>
                </div>
            </section>
            <div className="navbar-container">
                <div className="container">
                    <input type="checkbox" id="nav" className="hidden" />
                    <label onClick={()=> setOpen(true)} id="close-button" htmlFor="nav" className="nav-btn">
                        <i></i>
                        <i></i>
                    </label>
                    <div className="logo">
                    <Link to="/" className='routingLinks'>
                        <div className='logoFinal'>
                            <img src={Logo} alt="logo-final-show" />
                        </div>
                    </Link>
                    </div>
                    <div className="nav-wrapper">
                        <ul>
                            <li className="nav-item">
                                <button className='btn btnMobile'><Link to="/" className='routingLinks' onClick={()=> setOpen(false)}>Home</Link></button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btnMobile'><Link to="/results" className='routingLinks' onClick={()=> setOpen(false)}>Results</Link></button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btnMobile'><a href="https://finalshow.be/" target="_blank" className='routingLinks'>Platform</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav