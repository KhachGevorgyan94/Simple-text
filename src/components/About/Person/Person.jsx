import React from "react"
import './Person.scss'
import aboutData from "./aboutData"


class Person extends React.Component {
    render() {
        return (
            <div className='personContainer'>
                {aboutData.map((item) => (
                    <div className="aboutPerson">
                        <img className='aboutImg' src={item.image} alt=''/>
                        <div>
                            <h4 className='name'>{item.name}</h4>
                            <p className='position'>{item.position}</p>
                            <p className="info">{item.info}</p>
                            <div className="page">
                                <a href="https://www.facebook.com" target="_">
                                    {item.page}
                                </a>
                                {item.page2?<a href="https://twitter.com/" target="_">
                                    {item.page2}
                                </a>:null}
                                {item.page3?<a href='https://www.instagram.com/' target="_">
                                    {item.page3}
                                </a>: null}
                                <a href="https://www.youtube.com/" target="_">
                                    {item.page4}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Person