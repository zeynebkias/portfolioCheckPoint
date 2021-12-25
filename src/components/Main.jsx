import React from "react";
import Circle from "./Circle";
import "./Main.css";






function Main(props) {
  return (
    <div className="container">
      <div>
        <img src={props.image} alt={props.alt} />
      </div>
      <div>
        <h1>Hello,</h1>
        <p>a bit about me:</p>
        <div className="circleParent">
          <Circle content="MY RESUME" classColor="btn-color" />
          <Circle content="MY WORKS" classColor="btn-color2" />
          <Circle content="MY SKILLS" classColor="btn-color3" />
        </div>
        <p className='description'>I am here to show you why react js is so powerful to build you're web applications. and why you should become a diveloper! <br /> <br />
        I have been working for 3 years, specializing in Front-End development. <br />
        I love {props.Coding}, as well as its frameworks jQuery and React.JS</p>

      </div>
    </div>
  );
}

export default Main;
