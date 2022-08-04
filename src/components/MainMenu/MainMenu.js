import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MainMenu.module.scss';

function MainMenu(props) {
    return (
        <div className={styles.MenuFone}>
            <nav className={styles.Menu}>
            <ul className={styles.MainNav} >
                <li className={styles.NavBtn}><Link className={styles.NavLink} to='/'>Main</Link></li>
                <li className={styles.NavBtn}><Link className={styles.NavLink} to='/AboutMe'>About Me</Link></li>
                <li className={styles.NavBtn}><Link className={styles.NavLink} to='/ExampleSite'>Example Site</Link></li>
                <li className={styles.NavBtn}><Link className={styles.NavLink} to='/ExampleDevelopments'>Example Developments</Link></li>
            </ul>
            </nav>
        </div>
    );
}

export default MainMenu;