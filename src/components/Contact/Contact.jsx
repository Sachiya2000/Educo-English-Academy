/* eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css';
import msgIcon from '../../assets/msg-icon.png';
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";

const Contact = () => {
      const [result, setResult] = React.useState("");

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "296e31d3-20ef-4c8b-b598-d93ab150707f");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send As a Message <img src={msgIcon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a
          necessitatibus dignissimos cumque natus placeat, officiis perspiciatis
          architecto dolorem nobis illo labore delectus, amet nostrum culpa quod
          voluptatum consequatur in excepturi autem. Exercitationem asperiores
          praesentium fugiat, deserunt illum accusamus eveniet!
        </p>
        <ul>
          <li><img src={mailIcon} alt="" />contactsupport@gmail.com</li>
          <li><img src={phoneIcon} alt="" /> +94112345678</li>
          <li><img src={locationIcon} alt="" /> No : 110,Kohuwala,Colombo</li>
        </ul>
      </div>
      <div className="contact-col">
        <form  onSubmit={onSubmit}>
            <label > Your Name</label>
            <input type="text" placeholder="Enter Your Name" name='name' required />
            <label >Phone Number</label>
            <input type="tel" placeholder="Enter Your Phone Number" name='phone' required />
            <label >Write Your Message</label>
            <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={whiteArrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact
