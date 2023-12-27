import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="footer-row">
          <div className="footer1">
            <h5 className="h4">Links</h5>
             <ul className="list-unstyled">
              <li>
                <Link href="#home" className="text-white a1">
                  Technicians
                </Link>
              </li>
              <li>
                <Link href="#home" className="text-white a1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#home" className="text-white a1">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer2">
            <h5 className="h4">Menu</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="#home" className="text-white a1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#home" className="text-white a1">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#home" className="text-white a1">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="custom-copy">
          <div className="copy-right">
            <p>&copy; 2023 Your Company. All rights reserved. By <a href="http://localhost:5000/docs/" >Faustine</a></p>
          </div>
          <div className="social-right">
            <div className="col d-flex justify-content-center">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <Link to="#" className="d-flex align-items-center justify-content-center custom-link">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link to="#" className="d-flex align-items-center justify-content-center custom-link">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link to="#" className="d-flex align-items-center justify-content-center custom-link">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link to="#" className="d-flex align-items-center justify-content-center custom-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
