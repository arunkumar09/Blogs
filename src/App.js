import Navbar from './Navbar';
import Home from './Home';
import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    //JSX - babel converst this to HTML
    <Router>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Navbar></Navbar>
        <div className='content'>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>       
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
