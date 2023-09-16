import React from "react"
import Info from "../Home/Info/Info";
import aboutImg from '../../img/about-06.jpg'
import Person from "./Person/Person";
import Image from "./Image/Image";
import ReadMore from "./AboutReadMore/ReadMore";
import AsideSection from "../Home/AsideSection/AsideSection";


class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return <div>

            <Info
                title="About Simple House"
                description="This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."
            />

            <Person/>
            <Image/>
            <ReadMore/>
            <AsideSection
                image={aboutImg}
                title="History of our restaurant"
                text="Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.
                    Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to"
                link="https://templatemo.com/contact"
                text2="contact TemplateMo "
                text3="for additional permissions about our templates. Thank you."
            />


        </div>
    }
}

export default About;