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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>   
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;
