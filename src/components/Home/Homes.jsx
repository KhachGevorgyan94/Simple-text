import React from "react";

import Info from './Info/Info';
import Button from './Button/Button';
import Menu from './Menu/Menu';
import AsideSection from "./AsideSection/AsideSection";
import data from './Menu/data';
import imgSimple from '../../img/img-01.jpg';
import './Home.scss'


class Homes extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="App">
                <Info
                    title="Welcome to Simple House"
                    description="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download,
                                  edit and use this TemplateMo layout for your commercial or non-commercial websites."
                />
                {/*<Button/>*/}
                <Menu />
                <AsideSection
                    image={imgSimple}
                    title="Maecenas nulla neque"
                    text="Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to"
                    link="https://templatemo.com/contact"
                    text2="talk to us"
                    text3="for additional permissions about our templates. Thank you."
                    readMore='readMore'
                    textBtn="Read More"
                />
            </div>

        );

    }
}

export default Homes;