import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div className="home">
            <div className='home-content'>
                <h5>So, you want to travel to</h5>
                <h1>space</h1>
                <p className='description'>Let’s face it; if you want to go to space,
                 you might as well genuinely go to outer space and not hover kind of on the edge of it.
                  Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='button-container'>
                <div className='home-button'>
                    <p>explore</p>
                </div>
            </div>
        </div>
    )
}

export default Home; 