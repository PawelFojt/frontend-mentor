import React, { useState, useEffect } from 'react';
import '../App.css';
import data from '../data.json';
import firstImgDesktop from '../assets/technology/image-launch-vehicle-portrait.jpg';
import firstImgLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import secondImgDesktop from '../assets/technology/image-spaceport-portrait.jpg';
import secondImgLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import thirdImgDesktop from '../assets/technology/image-space-capsule-portrait.jpg';
import thirdImgLandscape from '../assets/technology/image-space-capsule-landscape.jpg';


const Technology = (props) => {
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

  let firstImg= props.width >= 1000 ? firstImgDesktop : firstImgLandscape;
  let secondImg= props.width >= 1000 ? secondImgDesktop : secondImgLandscape;
  let thirdImg= props.width >= 1000 ? thirdImgDesktop : thirdImgLandscape;
  const images = {
    0: firstImg,
    1: secondImg,
    2: thirdImg,
  }


    return (
      <div className="tech-container">
        <h5><span className='header-number'>03</span> Space launch 101</h5>
        <div className = "tech">
          <div className='tech-content'>
            {/* Wybór*/}
            <ul className="tech-nav">
              <li className={clicked===0 || clicked===5 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(0)},700); setClick(0)}}>1</li>
              <li className={clicked===1 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(1)},700); setClick(1)}}>2</li>
              <li className={clicked===2 ? "active-dot" : ""} onClick={() => {setTimeout(() => {setPicture(2)},700); setClick(2)}}>3</li>
            </ul>
            {/* Opis*/}
            <div className={fade.moveStyle} >
              <h4 style={{color: "#8F9095"}}>The terminology...</h4>
              <h3 style={{paddingTop: "0.5vw"}}>{data.technology[picture].name}</h3> 
              <p className='description'>{data.technology[picture].description}</p>
            </div>
          </div>
          {/* Obraz picturey */}
          <div className='tech-image'>
            <img className={fade.fadeStyle} src={images[picture]} alt={data.destinations[picture].name}/>
          </div>
         
        </div>
      </div>
    )
}

export default Technology;