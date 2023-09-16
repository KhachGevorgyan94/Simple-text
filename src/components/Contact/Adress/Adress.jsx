import React from "react";
import './Adress.scss';
import AddressInfo from "./AddressInfo/AddressInfo";




class Adress extends React.Component {
    
    render() {
        return (
            <div className="adressContainer">
                <form className="mailInfo">
                    <label >
                        <input type="text" className="loginName" placeholder="Name" />
                    </label>
                    <input type="email" className="loginName" placeholder="Email"  />
                    <textarea className="loginName" rows={5} placeholder="Message"  />
                    <button type="submit" className="send" >Send</button>
                </form>
                <AddressInfo />
            </div>
        )
    }
}

export default Adress