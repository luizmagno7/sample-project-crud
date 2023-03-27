import React from "react";
import styles from "./Logo.module.scss"
import Img from "../../assets/Open Designers Logo.png"

export default function Logo(){
    return <picture className={styles.logo}><img src={Img} alt="logo marca" /></picture>
}
