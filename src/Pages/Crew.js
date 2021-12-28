import React, { useState, useEffect } from 'react';
import '../App.css';
import data from '../data.json';
import firstImg from '../assets/crew/image-douglas-hurley.png';
import secondImg from '../assets/crew/image-mark-shuttleworth.png';
import thirdImg from '../assets/crew/image-victor-glover.png';
import fourthImg from '../assets/crew/image-anousheh-ansari.png';
const images = {
  0: firstImg,
  1: secondImg,
  2: thirdImg,
  3: fourthImg
}
const Crew = () => {
  const [fade, setFade] = useState({
    fadeStyle: 'fade-out',
    moveStyle: 'move-out'
  });
  const [picture, setPicture] = useState(0);
  const [clicked, setClick] = useState(5);
  useEffect (()=> {
    setFade({
      fadeStyle: 'fade-in',
      moveStyle: 'move-in'
    })
  }, []);
  useEffect (()=> {
    if (clicked<5) {
    setFade({
      fadeStyle: 'fade-out',
      moveStyle: 'move-out'
    })
    
    setTimeout(()=> {
    setFade({
      fadeStyle:'fade-in',
      moveStyle: 'move-in'
    })},600);
  }}, [clicked]);
    return (
      <div className="crew-container">
        <h5><span className='header-number'>02</span> Meet your crew</h5>
        <div className = "crew">
          <div className='crew-content'>
            
            {/* Opis */}
            <div className={fade.moveStyle} >
              <h4 style={{color: "#8F9095"}}>{data.crew[picture].role}</h4>
              <h3 style={{paddingTop: "0.5vw"}}>{data.crew[picture].name}</h3> 
              <p className='description'>{data.crew[picture].bio}</p>
            </div>
            {/* Wybór załoganta */}
            <ul className="crew-nav">
              <li className={clicked===0 || clicked===5 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(0)},700); setClick(0)}}></li>
              <li className={clicked===1 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(1)},700); setClick(1)}}></li>
              <li className={clicked===2 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(2)},700); setClick(2)}}></li>
              <li className={clicked===3 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(3)},700); setClick(3)}}></li>
            </ul>
          </div>
          {/* Obraz picturey */}
          <div className='crew-image'>
            <img className={fade.fadeStyle} src={images[picture]} alt={data.destinations[picture].name}/>
          </div>
         
        </div>
      </div>
    )
}

export default Crew; 