import aboutImg01 from '../../../img/about-01.jpg';
import aboutImg02 from '../../../img/about-02.jpg';
import aboutImg03 from '../../../img/about-03.jpg';
import aboutImg04 from '../../../img/about-04.jpg';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const aboutData = [
    {
        image: aboutImg01,
        name: 'Fusce dictum finibus',
        position: 'Founder and CEO',
        info: 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
        page: <FaFacebook/>,
        page2: <FaTwitter/>,
        page3: <FaInstagram/>,
    },
    {
        image: aboutImg02,
        name: 'Daisy Walker',
        position: 'Executive Chef',
        info: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
        page: <FaFacebook/>,
        page2: <FaTwitter/>,
    },
    {
        image: aboutImg03,
        name: 'Florence Nelson',
        position: 'Kitchen Manager',
        info: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae',
        page: <FaFacebook/>,
        page3: <FaInstagram/>,
    },
    {
        image: aboutImg04,
        name: 'Valentina Martin',
        position: 'Culinary Director',
        info: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
        page: <FaFacebook/>,
        page2: <FaTwitter/>,
        page3: <FaInstagram/>,
        page4: <FaYoutube/>,
    }

]

export default aboutData;