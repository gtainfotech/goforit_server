import React, {Component} from 'react';
import './header.css';
import Logo from '../../images/go_for_it_LOGO.svg';

 
class Header extends Component{
    render(){
        return (
    
            <header className="header">
                    <div className="headerContainer">
                        <div className="logoContainer">
                            <img src={Logo} alt='logo'/>
                        </div>
                        <div className="headingContainer">

                        </div>
                        <div className="loginContainer"></div>
                     </div>

                    <nav className="">
                        <ul className='nav'>
                            <li className='nav-item'>Home</li>
                            <li className='nav-item'>Features</li>
                            <li className='nav-item'>Members</li>
                            <li className='nav-item'>Targeting</li>
                            <li className='nav-item'>How It Works</li>
                            <li className='nav-item'>About US</li>
                        </ul>
                    </nav>

            </header> 
        );
    }
}

export default Header;
