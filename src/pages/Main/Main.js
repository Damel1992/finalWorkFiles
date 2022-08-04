import React, { useState } from 'react';
import styles from './Main.module.scss';
import {Link} from 'react-router-dom';


function Main(props) {



    return (
        <div className={styles.Main}>
            <div className={styles.MainBlure}>
                <img className={styles.MainFone} src="./images/MainFone.jpg"/>
                <li className={styles.MainLi}><Link className={styles.MainHeading} to='/AboutMe'>Ильнур Куликов<br/>
                Frontend developer</Link></li>
            </div>
        </div>
    );
}

export default Main;