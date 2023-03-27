import React, { useState } from "react";
import styles from "./Header.module.scss"
import Logo from "../Logo/index.jsx"
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom';

function Header() {

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    return (
        <>
        <header className={styles.container}>
            <div className={styles.brand}>
                <Logo/>
                
            </div>
            <div className={styles.responsiveNav}>
                <button className={styles.btnMenu} onClick={() => {setIsActiveMenu(!isActiveMenu)}}><AiOutlineMenu/></button>
                <nav className={`${styles.menu} ${isActiveMenu ? styles.active: ""}`}>
                    <ul>
                        <li><a><Link to="/">Home</Link></a></li>
                        <li><a><Link to="/users">Users</Link></a></li>
                        <li><a><Link to="/">Contact</Link></a></li>
                    </ul>   
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;
