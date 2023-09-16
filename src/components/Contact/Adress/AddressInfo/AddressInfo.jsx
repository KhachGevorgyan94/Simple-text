import React from "react";
import './AddressInfo.scss'
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

class AddressInfo extends React.Component {
    render() {
        return (
            <div className="addressInfo">
                <h1 className="addressHeader">Our Address</h1>
                <address className="addressText">180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</address>
                <div className="info">
                    <a className="phoneNumber" href="tel:080-090-0110">
                        <FaPhone className="phoneIcon" />
                        080-090-0110
                    </a>
                    <a className="phoneNumber" href="mailto:info@company.co">
                        <FaEnvelope className="phoneIcon" />
                        info@company.co
                    </a>
                </div>
                <div className="addressIcon">
                    <a href="https://www.facebook.com/" target="_">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com/" target="_">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/" target="_">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        )
    }
}

export default AddressInfo