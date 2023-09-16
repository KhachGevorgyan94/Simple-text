import React from "react";
import {FaCaretDown, FaCaretLeft} from "react-icons/fa";
class ToggleContent extends React.Component{
    state = {
        isOpen:false
    }

    toggleChange = ()=>{
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return < >
            <button  onClick={this.toggleChange}  className='messageBtn'>
                <span className='messageText'>{this.props.title}</span>
                {this.state.isCaretDown ? <FaCaretDown className='messageIcon' /> : <FaCaretLeft className='messageIcon' />}
            </button>
            {this.state.isOpen &&
                <p className='mesDescription'>
                    {this.props.description}
                </p>}
        </>
    }
}

export default ToggleContent