/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Testimonial.css';
import nextIcon from '../../assets/next-icon.png';
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";


const Testimonial = () => {
       const slider = useRef();
       let tx = 0;
const slideFoward = () =>{
    if (tx  > -50) {
        tx -= 25;
     
        }
slider.current.style.transform = `translateX(${tx}%)`;
    
}
const slideBackward = () =>{
  if (tx< 0) {
    tx += 25;
    slider.current.style.transform = `translateX(${tx}%)`; 
  }
    
  
    
}


  return (
    <div className="testimonials">
      <img src={nextIcon} className="next-btn" onClick={slideFoward} alt="" />
      <img src={backIcon} className="back-btn" onClick={slideBackward} alt="" />
      <div className="slider" >
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="user-details">
                  <h3>Sewmini Dias </h3>
                  <span>Designer</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                praesentium architecto sed, ea molestiae eum saepe beatae.
                Alias, laborum. Nostrum blanditiis excepturi dolore corporis
                quam a in at, magnam inventore architecto quaerat nobis
                quibusdam dolor quia neque accusamus, sapiente odio vel? Unde
                voluptatum tenetur veritatis provident, culpa cum molestias aut?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div className="user-details">
                  <h3>Mahinda Lokka</h3>
                  <span>Appachchi</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                praesentium architecto sed, ea molestiae eum saepe beatae.
                Alias, laborum. Nostrum blanditiis excepturi dolore corporis
                quam a in at, magnam inventore architecto quaerat nobis
                quibusdam dolor quia neque accusamus, sapiente odio vel? Unde
                voluptatum tenetur veritatis provident, culpa cum molestias aut?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div className="user-details">
                  <h3>Senurya Malkanthi</h3>
                  <span>Quality Assurance</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                praesentium architecto sed, ea molestiae eum saepe beatae.
                Alias, laborum. Nostrum blanditiis excepturi dolore corporis
                quam a in at, magnam inventore architecto quaerat nobis
                quibusdam dolor quia neque accusamus, sapiente odio vel? Unde
                voluptatum tenetur veritatis provident, culpa cum molestias aut?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div className="user-details">
                  <h3>Namal Baby</h3>
                  <span>Hora</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                praesentium architecto sed, ea molestiae eum saepe beatae.
                Alias, laborum. Nostrum blanditiis excepturi dolore corporis
                quam a in at, magnam inventore architecto quaerat nobis
                quibusdam dolor quia neque accusamus, sapiente odio vel? Unde
                voluptatum tenetur veritatis provident, culpa cum molestias aut?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonial
