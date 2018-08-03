import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import myPhoto from "../../static/my.jpg";
import '../../static/Roboto-Light.ttf';

const IndexPage = () => (
  <div className="mainDiv">
    <div className="photoDiv">
      <img src={myPhoto} />
    </div>
    <div className="topDiv" />
    <div className="bottomDiv">
      <div className="introDiv">
        <div style={{ 'font-size': '30px' }}>Hi, I'm Rohit</div>
        <br />
        <div>I develop and code User Interfaces & I love what I do</div>
      </div>
    </div>
  </div>
)

export default IndexPage
