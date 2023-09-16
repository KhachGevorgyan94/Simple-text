import React from "react";
import './Image.scss';
import aboutMidlleImg from '../../../img/about-05.jpg';

class Image extends React.Component {
    imageStyle = {
        backgroundImage: `url(${aboutMidlleImg})`,
        width: '100%',
        minHeight: '220px',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    render() {
        return (
            <div className="aboutMidlleImg">
                <div style={this.imageStyle}></div>
            </div>
        )
    }
}

export default Image