import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-d3.png';
import LogoSubtitle from '../../assets/images/logo-sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser, faLinkedin, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faSkype, faYoutube, faFigma } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink
             onClick={() => setShowNav(false)}
            
            exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink
             onClick={() => setShowNav(false)}
            
            exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink
             onClick={() => setShowNav(false)}
            
            exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink
             onClick={() => setShowNav(false)}
            exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

            <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target="_balnk" rel='noreferrer' href='https://github.com/dhanabalan2002'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_balnk" rel='noreferrer' href=''>
                    <FontAwesomeIcon icon={faInstagram} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_balnk" rel='noreferrer' href=''>
                    <FontAwesomeIcon icon={faYoutube} color="4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
        />
    </div>
)
    }

export default Sidebar;