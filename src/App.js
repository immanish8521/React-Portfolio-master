import React,{useState, useEffect} from "react";
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav"

import { Switch, Route, Redirect } from "react-router-dom";

function App() {

  const [darkTheme, setDarkTheme] = useState(initialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme))
  }, [darkTheme])

  function initialMode() {
    const savedData = JSON.parse(localStorage.getItem("dark"));
    return savedData || false;
  }

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <div className="toggle-bar">
      <Nav/>

      {/* toggle-switch */}
        
      <label className="switch">
          <input onClick={() => setDarkTheme(prevMode => !prevMode)} type="checkbox" ></input>
          <span className="slider round"></span>
      </label>
        
      {/* toggle-switch-end */}
      </div>
      {/* Router */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/contact" component={Contact}></Route>   
        <Redirect to="/"></Redirect>
      </Switch>
      {/* Router-end */}
    </div>
  );
}

export default App;
