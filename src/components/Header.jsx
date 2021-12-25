import React from "react";
import "./Header.css";




function Header(props) {
  return (
    <div className="headerContainer">
      <div className="leftSide">
        <div className="name">
        </div>

        <h2>{props.name}</h2>
        <p className="p">{props.job}</p>
      </div>
      <div className="rightSide">
        <ul>
          <li>
            <a href="#" className='home'>Home</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
