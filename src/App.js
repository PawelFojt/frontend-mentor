import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/nav';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import Home from './Pages/Home';

const App = () => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
      function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }
      const {width } = useWindowDimensions();

  return (
    <Router>
      <div className="App" >
        <NavBar />
        <Switch>
          <Route path ="/destination"><Destination width={width}/> </Route>
          <Route path ="/crew"><Crew width={width}/> </Route>
          <Route path ="/technology"><Technology width={width}/> </Route>
          <Route path ="/"><Home width={width} /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;