import React, { useState, useEffect } from 'react';
import '../App.css';
import data from '../data.json';
import firstImg from '../assets/destination/image-moon.png';
import secondImg from '../assets/destination/image-mars.png';
import thirdImg from '../assets/destination/image-europa.png';
import fourthImg from '../assets/destination/image-titan.png';
const planets = {
  0: firstImg,
  1: secondImg,
  2: thirdImg,
  3: fourthImg
}
const Destination = () => {
  const [fade, setFade] = useState({
    fadeStyle: 'fade-out',
    moveStyle: 'move-out'
  });
  const [planet, setPlanet] = useState(0);
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
      <div className="dest-container">
        <h5><span className='header-number'>01</span> Pick your destination</h5>
        <div className = "destination">
          {/* Obraz planety */}
          <div className='dest-image'>
            <img className={fade.fadeStyle} src={planets[planet]} alt={data.destinations[planet].name}/>
          </div>
          {/* Wybór planety */}
          <div className='dest-content'>
            <ul className="planets">
              <li className={clicked===0 || clicked ===5 ? "active-class" : ""} onClick={() => {setTimeout(() => {setPlanet(0)},700); setClick(0)}}>Moon</li>
              <li className={clicked===1 ? "active-class" : ""} onClick={() => {setTimeout(() => {setPlanet(1)},700); setClick(1)}}>Mars</li>
              <li className={clicked===2 ? "active-class" : ""} onClick={() => {setTimeout(() => {setPlanet(2)},700); setClick(2)}}>Europa</li>
              <li className={clicked===3 ? "active-class" : ""} onClick={() => {setTimeout(() => {setPlanet(3)},700); setClick(3)}}>Titan</li>
            </ul>
            {/* Opis planety */}
            <div className={fade.moveStyle} >
              <h2 style={{paddingTop: "3rem"}}>{data.destinations[planet].name}</h2> 

              <p className='description'>{data.destinations[planet].description}</p>
              <div className='vertical-line'></div>
                <div className='planets-stats'>
                  <div>
                    <p className='sub-heading2'>avg.distance</p>
                    <p className='sub-heading1'>{data.destinations[planet].distance}</p>
                  </div>
                  <div>
                    <p className='sub-heading2'>est. travel time</p>
                    <p className='sub-heading1'>{data.destinations[planet].travel}</p>
                  </div>
                </div>

            </div>
          </div>
          
         
        </div>
      </div>
    )
}

export default Destination;