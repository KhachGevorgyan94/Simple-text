import './AsideSection.scss';

import React from "react";
class AsideSection extends React.Component {
    render() {
        return (
        <div className='aside'>
            <div className='firstSection'>
                <img className='imgAside' src={this.props.image} alt='' />
            </div>
            <div className='secondSection'>
                <h3 className='asideHeader'>{this.props.title}</h3>
                <p className='asideText'>{this.props.text} <a href={this.props.link} target='blank'>{this.props.text2}</a> {this.props.text3}</p>
                <a className={this.props.readMore} href='/About' >{this.props.textBtn}</a>
            </div>
         </div>
        )
    }
}

export default AsideSection;