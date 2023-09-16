import React from "react";
import Info from "../Home/Info/Info";
import Adress from "./Adress/Adress";
import Message from "./Message/Message";

class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (<>

                <Info
                    title='Contact Page'
                    description='You may use'
                    link="https://www.ltcclock.com/downloads/simple-contact-form/"
                    text='Simple Contact Form'
                    description2='to send email to your inbox. You can modify and use this template for your website. 
                        Header image has a parallax effect. Total 3 HTML pages included in this template.'
                />
                <Adress/>
                <Info
                    title='FAQs'
                    description='This section comes with Accordion tabs for different questions and answers about 
                                    Simple House HTML CSS template. Thank you. #666'
                />
                <Message/>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24386.40539233668!2d44.51989269999999!3d40.1801216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1694866964763!5m2!1sen!2sam"  style={{width:'100%'}} height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </>

        )
    }
}

export default Contact;