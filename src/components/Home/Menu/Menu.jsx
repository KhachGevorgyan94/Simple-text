import './Menu.scss';
import React from "react";
import cl from "../Button/Button.module.scss";
import data from './data'

class Menu extends React.Component {
    state = {
        selectedItem: '',
        categoryList: ['Pizza', 'Salad', 'Noodle']
    }

    componentDidMount() {
        this.changeCategory(this.state.categoryList[0])
    }

    changeCategory = (categoryId) => {
        this.setState({selectedItem:categoryId})
    }

    render() {
        const {categoryList} = this.state


        return <>
            <div className={cl.homeBtn}>
                {categoryList.map((item, index) => {
                    return <button onClick={() => this.changeCategory(item)}
                                   className={`${cl.click}
                                    ${this.state.selectedItem === item ? cl.activeCategory : ''}`}
                                   key={index}>{item}</button>
                })}
                {/*<button className={cl.click}>Pizza</button>*/}
                {/*<button className={cl.click}>Salad</button>*/}
                {/*<button className={cl.click}>Noodle</button>*/}
            </div>
            <div className='menu'>
                {data.filter(x=>x.category===this.state.selectedItem).map((item) => (
                    <div>
                        <img className='imgMenu' src={item.image} alt=''/>
                        <h3 className='menuHeader'>{item.title}</h3>
                        <p className='menuInfo'>{item.text}</p>
                        <span className='menuPrice'>{item.price}</span>
                    </div>
                ))}
            </div>
        </>
    }
}

export default Menu;