import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img className="about-image" src={process.env.PUBLIC_URL + '/img/about.jpg'} alt="" />
        <div className="about-content">
          <div className="content-title">
            <h2 className="title">Why Choose Us ?</h2>
          </div>
          <div className="text">
            <p>
              Welcome to Repair Revolt, your go-to platform for hassle-free auto repairs. At Repair Revolt, we believe in connecting vehicle owners with skilled and trustworthy auto repair technicians in their local area.
            </p>
            <p>
              Our mission is to revolutionize the auto repair industry by simplifying the process for both users and technicians. We understand the importance of your vehicle, and that's why we strive to provide a seamless experience for finding quality auto repair services. Whether you're a vehicle owner looking for skilled technicians or a technician eager to showcase your expertise, Repair Revolt is the platform for you. We prioritize your satisfaction and the optimal performance of your vehicle.
            </p>
            <div className="data">
              <Link type='Link' to='/signup' className='btn btn2'>
                Sign up <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

