import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from "react";
import emailjs from 'emailjs-com'


const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_5aoviet', 'template_394u1q1', formRef.current, 'user_n7AJnLDzgQmRiqdP25u4r')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

  return  <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let us talk about your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="" className="c-icon" />
                      +2349038315176, +2349064450994
                  </div>
                  <div className="c-info-item">
                      <img src={Email} alt="" className="c-icon" />
                      kunlefashmayop@gmail.com
                  </div>
                  <div className="c-info-item">
                      <img src={Address} alt="" className="c-icon" />
                      No 19, Hopeland Avenue, Fed Housing Estate, Ado-Ekiti, Ekiti State, Nigeria
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>This is my portfolio!!</b> I am a very diligent and hardworking person. I am a fullstack web developer familiar with React for frontend and NodeJs for Backend. I am ready to put in my 100% for any job you have got for me
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" name="user_name" />
                  <input type="text" placeholder="Subject" name="user_subject" />
                  <input type="text" placeholder="Email" name="user_email" />
                  <textarea rows="5" placeHolder="Message" name="message"/>
                <button>Submit</button>
              </form>
          </div>

      </div>
  </div>;
  
};

export default Contact;
