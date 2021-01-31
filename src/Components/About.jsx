import React from 'react';
// import Arrow from "../Images/down-arrow.png";
import Img1 from "../Images/Humaaans2.png";
import Img2 from "../Images/Humaans1.png";
import "../assests/style/About.css";
import { Spring } from "react-spring/renderprops";

const About = () => {
    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{delay:1000, duration: 1000}}
        >
            {props=>(
                <div style={props}>
            <div className="main-about">
            <div className="About">
                <div className="about-part-1">
                    <h1 className="about-head">Have a look <span>Around</span></h1><br/>

                    <p>And you will find everything you need to build a <br />great looking website.</p><br/><br/>
                
                    <button className="Arrow-btn">V</button>  View Demos  --

                <br /><br /><br /><br />
                
                <div className="line"></div>

                <div className="about-icon">
                    <div className="about-icon-1">
                        <h1>14</h1>
                        <h4>Demo <br />Homepages</h4>
                    </div>
                    <div className="about-icon-2">
                    <h1>50+</h1>
                    <h4>Flexible <br />Components</h4>
                    </div>
                    <div className="about-icon-3">
                        <h1>60</h1>
                        <h4>Flexible <br/>Components</h4>
                    </div>
                    
                </div>
            </div>
            <div className="about-part-2">
                <img className="image_circle-1" src={Img1} alt="" />
                <img className="image_circle-2" src={Img2} alt="" />

                {/* <div className="image_circle-3"></div> */}
            </div>
            </div>
            </div>
            </div>
            )}
        </Spring>
        
    )
}

export default About
