import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import style from './Footer.module.css';

function Footer(){

    return (
        <footer>
            <ul className={style.social_list}>
                <li><FaFacebook /></li>
                 <li><FaInstagram /></li>
                  <li><FaLinkedin /></li>
                  <p>Nosso Rodapé</p>
            </ul>
        </footer>
    );

}

export default Footer;