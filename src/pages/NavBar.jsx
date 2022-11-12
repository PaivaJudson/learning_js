import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.css'


export default function NavBar(){
    return (
        <div>
            <ul className={styles.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </div>
    );
}