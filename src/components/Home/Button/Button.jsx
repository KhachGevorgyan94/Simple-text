import React from "react";
import cl from './Button.module.scss';

class Button extends React.Component {

    render() {
        return (
            <div className={cl.homeBtn}>
                <button className={cl.click}>Pizza</button>
                <button className={cl.click}>Salad</button>
                <button className={cl.click}>Noodle</button>
            </div>
        )
    }
}

export default Button;