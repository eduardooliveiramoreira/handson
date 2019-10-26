import React from 'react';
import './App.css';
import Routes from "./routes";
import {BrowserRouter, Link} from "react-router-dom";
import {headerStyle} from "./Header.style";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <div className={headerStyle().header}>
              <div className={headerStyle().logo}>
                 <img className={headerStyle().imgLogo} src='https://lh3.googleusercontent.com/uOuUyOUkw-WiWHrQ6CugkhB3NjtHoP49oL3tBEeL26Jqh7egdBU-so4-RohUzsQBO9ZRQHI=w16383'/>
              </div>
              <div className={headerStyle().link}>
                      <Link className={headerStyle().link} to="/lecture">Palestras</Link>
                      <Link className={headerStyle().link} to="/handsOn">Hands On</Link>
                      <Link className={headerStyle().link} to="/">Home</Link>
              </div>
              </div>
              <Routes/>
          </BrowserRouter>
      </header>

    </div>
  );
}

export default App;
