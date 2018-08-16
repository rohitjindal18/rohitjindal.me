import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import myPhoto from "../../static/my.jpg";
import ln from "../../static/linkedin.svg";
import fb from "../../static/fb.svg";
import gh from "../../static/github.svg";

const IndexPage = () => (
  <main>
    <div className="mainDiv">
      <div className="photoDiv">
        <img src={myPhoto} alt="my photo" />
      </div>
      <div className="topDiv" />
      <div className="bottomDiv">
        <div className="introDiv">
          <div style={{ 'font-size': '30px' }}>Hi, I'm Rohit</div>
          <br />
          <div style={{ 'font-size': '24px' }}>I'm a Frontend developer at <span className="company">Flipkart</span>, India</div>
          <br />
          <div style={{ 'font-size': '24px' }}>I love developing User Interfaces</div>
          <br />
          <div style={{ 'font-size': '24px' }}>Get in touch</div>
          <br />
        </div>
      </div>
      <div className="appsdiv">
        <a aria-label="linkedIn" target="_blank" href="https://www.linkedin.com/in/jindalrohit18" rel="noopener"><img className="apps" src={ln} alt="linkedIn" /></a>
        <a aria-label="facebook" target="_blank" href="https://www.facebook.com/jindal.rohit018" rel="noopener"><img className="apps" src={fb} alt="facebook" /></a>
        <a aria-label="github" target="_blank" href="https://github.com/rohitjindal18" rel="noopener"><img className="apps" src={gh} alt="github" /></a>
      </div>
    </div>
  </main>
)

export default IndexPage
