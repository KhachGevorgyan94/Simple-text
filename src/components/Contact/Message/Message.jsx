import './Message.scss';
import React from "react";
import {FaCaretLeft, FaCaretDown} from 'react-icons/fa';
import ToggleContent from "./components/ToggleContent/ToggleContent";


class Message extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="messageContainer">
                <ToggleContent title={'1.Fusce eu lorem  et dui #09C maximus varius?'}
                               description={' #666 Duis blandit purus vel nenenatis rutrum. \n' +
                                   '                    Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. \n' +
                                   '                    Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.'}/>
                <ToggleContent title={'1.Fusce eu lorem  et dui #09C maximus varius?'}
                               description={' #666 Duis blandit purus vel nenenatis rutrum. \n' +
                                   '                    Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. \n' +
                                   '                    Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.'}/>
                <ToggleContent title={'1.Fusce eu lorem  et dui #09C maximus varius?'}
                               description={' #666 Duis blandit purus vel nenenatis rutrum. \n' +
                                   '                    Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. \n' +
                                   '                    Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.'}/>
                <ToggleContent title={'1.Fusce eu lorem  et dui #09C maximus varius?'}
                               description={' #666 Duis blandit purus vel nenenatis rutrum. \n' +
                                   '                    Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. \n' +
                                   '                    Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.'}/>

            </div>
        )
    }
}

export default Message