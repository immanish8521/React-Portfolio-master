import React,{useState} from 'react';
import '../assests/style/Contact.css';
import { Spring } from 'react-spring/renderprops';

const Contact = () => {

    const [form, setForm] = useState(false);

    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500}}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{delay: 900, duration: 900}}
        >
            {props => (
                <div style={props}>
                    <div className="contact-part">
            <div className="contact">
                <div className="contact-part-1">
                    <h3>Leave a message</h3>
                    <form action="">
                        <label htmlFor="">Name:</label>
                        <input type="text" placeholder="EnterFullName" required />
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder="EnterEmail" required />
                        <label htmlFor="">Phone:</label>
                        <input type="phone" placeholder="EnterPhoneNumber" required/>
                        <label htmlFor="">Message:</label>
                        <textarea name="message" id="" cols="50" rows="5"></textarea>
                        <input type="checkbox" />Remember password<br/>
                        <button onClick={() => setForm("Thank you for Contacting")} className="contact-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
                </div>
            )}
        
        </Spring>
    )
}

export default Contact;
