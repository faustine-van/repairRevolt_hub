import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth, logout } from '../auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faPhone, faArrowRightLong, faGear } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faHouse, faUserGroup, faCar, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const LoggedInMenu = () => {
  const [userInfo, setUserInfo] = useState();

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');

    const headers = {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }
  fetch('/api/v1/users/me', headers)
  .then(res => res.json())
  .then(userData => {
    console.log(userData)
    setUserInfo(userData.full_name);
  });
  return (
      <>
        <ul className="links">
          <li className=''>
            <NavLink className='link' to='/'>Home</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/technicians'>Technicians</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/services'>Services</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/about'>About us</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/aboutus'>Contact us</NavLink>
          </li>

        </ul>
        <ul className='btn-group1'>
        <li className='drop-down'>
            <NavLink className='link' to='/about-us'>{userInfo} <FontAwesomeIcon icon={faCaretDown} /></NavLink>
             <ul className="links">
              <li className=''>
               <NavLink className='link' to='/technicians'><FontAwesomeIcon icon={faHouse} className="icon" />Home</NavLink>
              </li>
              <li className=''>
               <NavLink className='link' to='/profile'><FontAwesomeIcon icon={faUser} className="icon" /> My Profile</NavLink>
              </li>
              <li className=''>
               <NavLink className='link' to='/profile'><FontAwesomeIcon icon={faGear} className="icon" /> Setting</NavLink>
             </li>
             <li className=''>
              <NavLink className='link' to='/aboutus'><FontAwesomeIcon icon={faRightFromBracket} className="icon" /> Profile</NavLink>
             </li>
             <li className=''>
              <NavLink className='link' to="/" onClick={() => { logout(); }} ><FontAwesomeIcon icon={faRightFromBracket} className="icon" /> Log out</NavLink>
             </li>
            </ul>
          </li>
        </ul>
      </>
  );
};
const LoggedOutMenu = () => {
  return ( 
      <>
        <ul className="links">
          <li className=''>
            <NavLink className='link' to='/'>Home</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/technicians'>Technicians</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/services'>Services</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/about'>About us</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/aboutus'>Contact us</NavLink>
          </li>
          <li className=''>
            <NavLink className='link' to='/about-us'>Dropdown <FontAwesomeIcon icon={faCaretDown} /></NavLink>
             <ul className="links">
              <li className=''>
               <NavLink className='link' to='/technicians'><FontAwesomeIcon icon={faHouse} className="icon" />Home</NavLink>
              </li>
              <li className=''>
               <NavLink className='link' to='/technicians'><FontAwesomeIcon icon={faUser} className="icon" /> My Profile</NavLink>
              </li>
              <li className=''>
               <NavLink className='link' to='/services'><FontAwesomeIcon icon={faGear} className="icon" /> Setting</NavLink>
             </li>
             <li className=''>
              <NavLink className='link' to='/aboutus'><FontAwesomeIcon icon={faRightFromBracket} className="icon" /> Profile</NavLink>
             </li>
             <li className=''>
              <NavLink className='link' to='/aboutus'><FontAwesomeIcon icon={faRightFromBracket} className="icon" /> Log out</NavLink>
             </li>
            </ul>
          </li>
        </ul>
        <ul className='btn-group'>
          <li className=''>
            <NavLink type='Link' to='/login' className='button btn-login'>
              <span> <FontAwesomeIcon icon={faUser} /></span> Log in
            </NavLink>
          </li>
          <li className=''>
            <NavLink type='Link' to='/signup' className='button btn-signup'>
              <span> <FontAwesomeIcon icon={faUser} /></span> Sign up
            </NavLink>
          </li>
        </ul>
      </>
  );
};
const Header = () => {
  
  //manage authentication
  const [logged] = useAuth();

  //open sidebar menu
  const [ isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen(true);
  };
  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <section className='section-header'>
      <div className='wrap'>
          <div className='number'>
            <div className='wrap-p'>
              <FontAwesomeIcon icon={faPhone} />
              <NavLink to='#' className='custom-link'>
                +250 712 634 567
              </NavLink>
            </div>
          </div>
          <div className='social-icons'>
              <div className='wrap-p'>
                <NavLink to='#' className='custom-link'>
                  <FontAwesomeIcon icon={faFacebook} />
                </NavLink>
                <NavLink to='#' className='custom-link'>
                  <FontAwesomeIcon icon={faTwitter} />
                </NavLink>
                <NavLink to='#' className='custom-link'>
                  <FontAwesomeIcon icon={faInstagram} />
                </NavLink>
                <NavLink to='#' className='custom-link'>
                  <FontAwesomeIcon icon={faGithub} />
                </NavLink>
              </div>
          </div>
      </div>
      <header className="header">
        <div className='container-logo'>
          <NavLink className='logo' to='/'>
            <img src={process.env.PUBLIC_URL + '/img/smalllogo.svg'} alt='logo' />
          </NavLink>
          <button className='' type='button' onClick={ openSideBar }>
            <img src={process.env.PUBLIC_URL + '/img/h-menu.svg'} alt='logo'/>
          </button>
        </div>
        { logged ? <LoggedInMenu /> : <LoggedOutMenu /> }
      </header>
      <nav className={`display-bar ${ isOpen ? 'visible' : 'hidden' }`}>
        <div className="menu_content">
        <div className="close">
           <span onClick={ closeSideBar }>
             <FontAwesomeIcon icon={faCircleXmark} />
           </span>
        </div>
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>

            <li className="item">
              <NavLink to="/" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <span className="navlink">Home</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </NavLink>
            </li>


            <li className="item">
              <NavLink to="/about" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faUserGroup} />
                </span>
                <span className="navlink">About us</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </NavLink>
            </li>

            <li className="item">
              <div href="#" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <span className="navlink">Services</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>
            </li>
            <li className="item">
              <NavLink to="/profile" className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="navlink">Technicians</span>
              </NavLink>
            </li>
            <li className="item">
              <NavLink href="#" className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                <span className="navlink">Contact us</span>
              </NavLink>
            </li>

          </ul>
          <div className="bottom-sidebar">
            <div className="bottom expand_sidebar">
              <NavLink type='Link' to='/signup' className='button btn-signup'>
                Sign Up <span> <FontAwesomeIcon icon={faArrowRightLong} /></span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Header;
