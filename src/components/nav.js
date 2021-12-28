import React, {useState, useEffect} from 'react';
import { ReactComponent as LogoSvg} from '../assets/shared/logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import {ReactComponent as IconClose} from '../assets/shared/icon-close.svg';
import {ReactComponent as IconHamburger} from '../assets/shared/icon-hamburger.svg';

const CloseButton = (props) => {
    return (
        <button className='nav-button' onClick={props.onClick}>
            <IconClose />
        </button>
    );
} 
const HamburgerButton = (props) => {
    return (
        <button className='nav-button' onClick={props.onClick}>
            <IconHamburger />
        </button>
    );
} 
    
const NavBar = () => {

    const [click, setClick] = useState(true);
    const handleCloseClick = () => {
        setClick(true);
    }
    const handleHamburgerClick = () => {
        setClick(false);
    }
    let button;
    if (click) {
        button = <HamburgerButton onClick = {handleHamburgerClick} />;
    } else {
        button = <CloseButton onClick = {handleCloseClick} />;
    }
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase',
    }
   
    const [clicked, setClicked] = useState(5);
    const [buttonStyle, setButtonStyle] = useState({
        navHide:"NavLinks"
    });

    useEffect (()=> {
        if (click===true){
        setButtonStyle({
            navHide: "NavLinks"
        })
    } else {
        setButtonStyle({
            navHide: "nav-hide"
        })
    }
      }, [click]);

    return (
      <div className="nav-bar" >
          <Link to="/home" onClick={() => {setClicked(0)}}>
          <div className="nav-logo">
              <LogoSvg/>
          </div>
          </Link>
          
          <div className="nav-line">
              
          </div>
          {button}
          <nav className={buttonStyle.navHide}>
                <ul>
                    <Link style={navStyle} to="/home" onClick={() => {setClicked(0)}}> 
                        <li className={clicked===0 ? "active" : ""}>
                           <span className='nav-number'>01 </span>
                           Home
                        </li>
                    </Link>

                    <Link style={navStyle} to="/destination" onClick={() => {setClicked(1)}}>
                        <li className={clicked===1 ? "active" : ""}>
                            <span className='nav-number'>02 </span>
                            Destination
                        </li>
                    </Link>

                    <Link style={navStyle} to="/crew" onClick={() => {setClicked(2)}}>
                        <li className={clicked===2 ? "active" : ""}>
                            <span className='nav-number'>03 </span>
                            Crew
                        </li>
                    </Link>

                    <Link style={navStyle} to="/technology" onClick={() => {setClicked(3)}}>
                        <li className={clicked===3 ? "active" : ""}>
                            <span className='nav-number'>04 </span>
                            Technology
                        </li>
                    </Link>
                </ul>
            </nav>
      </div>
    )
}

export default NavBar;