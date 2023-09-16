import React from "react";
import './Info.scss';
class Info extends React.Component {
    render() {
        return (
            <div className="infoList">
                <h2 className="infoHeader">
                    {this.props.title}
                </h2>
                <span className="infoText">
                    {this.props.description} <a href={this.props.link} target="blank">{this.props.text}</a> {this.props.description2}
                </span>
            </div>
        )
    }
}

export default Info; 