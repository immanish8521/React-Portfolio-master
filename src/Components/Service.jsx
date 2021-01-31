import React from 'react';
import "../assests/style/Service.css";
//importing images
import pic1 from '../Images/Humaaans2.png';
import {Spring} from 'react-spring/renderprops'

const Service = () => {
    return (
        <Spring
             from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{delay:1000, duration: 1000}}
        >
            {props => (
                <div style={props}>
                     <div className="grand-parent">
                <div className="parents">
                <div className="child">
                    <img src={pic1} alt=""/>
                </div>
                <div className="child">
                    <img src={pic1} alt=""/>
                </div>
                <div className="child">
                    <img src={pic1} alt=""/>
                </div>
            </div>
            </div>
                </div>
            )}
       
        </Spring>
    )
}

export default Service
