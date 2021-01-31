import React from 'react';
import Humaan from '../Images/Humaaans2.png';
import '../assests/style/Home.css';
import { Spring } from 'react-spring/renderprops';

const Home = () => {
    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500}}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{delay: 900, duration: 900}}
        >
            { props => (
                <div style={props}>
                    <div className="main-home-screen">
                     <div className="home-screen">
                        <div className="first-half">
                        <h1>Turn Your Ideas <br />into a <span>Success...</span></h1>
                            <p>front feature rich in designed demo pages help you create <br/> the best possible product</p>
                            <button className="btn-1">Get Started</button>
                        </div>
                        <div className="second-half">
                                <img className="img-home" src={Humaan} alt="Humaan"/>
                        </div>
                    </div>
                    </div>
                    </div>
                
            ) }
        </Spring>
         
    )
}

export default Home;
