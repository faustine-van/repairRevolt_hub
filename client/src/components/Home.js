import React from 'react'
//import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBurst, faCarSide, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const HomePage = () => {
  return (

    <section className="div-body">
      <SearchBar/>

      <div className="features">
       <div className="box-features">
        <h2>Our Features</h2>
       <div className="boxes">
        <div className="box">
           <h4><FontAwesomeIcon icon={faCarBurst} className="box-icon" /></h4>
           <div className="sub-box">
             <h5>Local Auto Repair Technicians.</h5>
             <p>Experience the difference auto repair services by connecting you with local auto repair technicians.
               The satisfaction and performance of your vehicle are our top priorities.</p>
           </div>
        </div>
        <div className="box">
           <h4><FontAwesomeIcon icon={faCarSide} className="box-icon" /></h4>
           <div className="sub-box">
             <h5>Technician Profile</h5>
             <p>
               Showcase your skills and connect with local vehicle owners by creating your technician profile.
               oin our platform to grow your automotive repair business and provide valuable services to customers.
             </p>
             </div>
        </div>
       </div>
       </div>
       <div className="box-img">
          <img src={process.env.PUBLIC_URL + '/img/auto-services.jpg'} alt="auto"/>
       </div>
      </div>


      <div className="featured">
        <h2>Service offerings</h2>
        <p className="intro">
           Discover a comprehensive range of auto repair services offered by our skilled technicians.
           Our experts are dedicated to providing top-notch solutions to meet your vehicle needs.
        </p>
       <div className="boxes">
        <div className="box">
           <h4><FontAwesomeIcon icon={faCarBurst} className="box-icon" /> Auto repair</h4>
           <p>Whether searching for a new technician or trying technician for the first time, finding the right fit can be challenging.</p>
        </div>
        <div className="box">
           <h4><FontAwesomeIcon icon={faCarSide} className="box-icon" /> Tire repair</h4>
           <p>Whether searching for a new technician or trying technician for the first time, finding the right fit can be challenging.</p>
        </div>
        <div className="box">
           <h4><FontAwesomeIcon icon={faScrewdriverWrench} className="box-icon" /> Paintless repair</h4>
           <p>Whether searching for a new therapist or trying therapy for the first time, finding the right fit can be challenging.</p>
        </div>
        <div className="box">
           <h4><FontAwesomeIcon icon={faScrewdriverWrench} className="box-icon" /> Paintless repair</h4>
           <p>Whether searching for a new therapist or trying therapy for the first time, finding the right fit can be challenging.</p>
        </div>
       </div>
      </div>

    </section>
  )
}
export default HomePage
