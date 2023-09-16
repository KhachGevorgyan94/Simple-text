import React from "react";
import './ReadMore.scss';
import {FaPepperHot} from 'react-icons/fa';
import {FaSeedling} from 'react-icons/fa';
import {FaCocktail} from 'react-icons/fa';
import {Link} from "react-router-dom";

class ReadMore extends React.Component {
    render() {
        return (
            <div className="readMoreWrapper">
                <div className="readMorePart">
                    <FaPepperHot className="readMoreIcon"/>
                    <p className="readMoreText">Donec sed orci fermentum, convallis lacus id, tempus elit.
                        Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.
                    </p>
                    <Link className='readMoreBtn btnFirst' to={'/'}>Read More</Link>
                </div>
                <div className="readMorePart G-flex">
                    <FaSeedling className="readMoreIcon"/>
                    <p className="readMoreText">
                        Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio.
                        Morbi in dolor finibus, consequat nisl eget.
                    </p>
                    <Link className='readMoreBtn btnSecond' to={'/'}>Read More</Link>
                </div>
                <div className="readMorePart">
                    <FaCocktail className="readMoreIcon"/>
                    <p className="readMoreText">Morbi in dolor finibus, consequat nisl eget, pretium nunc.
                        Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.
                    </p>
                    <Link className='readMoreBtn btnThird' to={'/'}>Read More</Link>
                </div>
            </div>
        )
    }
}

export default ReadMore;