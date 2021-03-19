import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Navbar
} from 'react-bootstrap'
// import {
//     FacebookIcon,
//     TwitterIcon,
//     LinkedInIcon,
//     GitHubIcon,
//     // HomeIcon

// } from '@material-ui/icons'
import HomeIcon  from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import {NavLink,withRouter} from 'react-router-dom'
import resumeData from '../../utils/ResumeData'
import CustomButtom from '../Button/Button';
import './Header.css'

const Header = (props) => {
    const pathName=props?.location?.pathname;

    const handleEmail =()=>{
        window.open("mailto:asif56175@gmail.com")
    }
    return (
        <Navbar sticky='top' className='header' expand='lg'>
          <Nav.Link as={NavLink} to='/' className='headre_navLink'>
            <Navbar.Brand className='header_home' >
                 <HomeIcon/>
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle/>
          <Navbar.Collapse>
              <Nav className='header_left'>
                  <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' :'header_link'}>
                     Resume
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' :'header_link'}>
                     Portfolio
                  </Nav.Link>
                 
              </Nav>
              <div className="header_right">
              {Object.keys(resumeData.socials).map(key=>(
            <a href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon}</a>
        ))}
        <div onClick={handleEmail}>
        <CustomButtom text={'Email'} icon={<TelegramIcon/>}/>
        </div>
              </div>
       
          </Navbar.Collapse>

        </Navbar>
    )
}

export default withRouter(Header)
