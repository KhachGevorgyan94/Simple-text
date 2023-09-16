import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import cl from './Header.module.scss';
class Navbar extends React.Component {
    render() {
        return (
            <nav className={cl.navLink}>
                    <div className={cl.item}>
                        <NavLink to={'/'}  activeClassName={cl.active} exact>Home</NavLink>
                    </div>
                    <div className={cl.item}>
                        <NavLink to={'/About'} activeClassName={cl.active} exact>About</NavLink>
                    </div>
                    <div className={cl.item}>
                        <NavLink to={'/Contact'} activeClassName={cl.active} exact>Contact</NavLink>
                    </div>
              
            </nav>
        )
    }
}

export default Navbar