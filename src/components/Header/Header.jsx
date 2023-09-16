import React from "react";
import cl from './Header.module.scss';
import imgHeader from '../../img/simple-house-01.jpg';
import imgLogo from '../../img/simple-house-logo.png';
import Navbar from "./Navbar";


class Header extends React.Component {
imageStyle = {
        backgroundImage: `url(${imgHeader})`,
        width: '100%',
        minHeight: '550px',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    render() {
        return <header>
            <div className={cl.header} style={this.imageStyle}>
                <div className={cl.logo}>
                    <img src={imgLogo} alt="/" />
                    <div>
                        <h1>Simple House</h1>
                        <p>new restaurant template</p>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    }
}

export default Header