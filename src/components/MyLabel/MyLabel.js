import React from 'react';
import styles from './MyLabel.module.scss';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MyLabel(props) {
    return (
        <div className={styles.MyLabel}>
            <div><img className={styles.labelAvatar} src='./images/LabelAvatar.png'></img></div>
            <h1 className={styles.labelHeading}>Куликов Ильнур</h1>
            <h2 className={styles.labelSubHeading}>Java Script &amp; Frontend Developer</h2>
            <div className={styles.labelContacts}>
                <div className={styles.contactsText}><a className={styles.contactsTel} href="mailto:linux1992@inbox.ru"><FontAwesomeIcon icon={faEnvelope}/>linux1992@inbox.ru</a></div>
                <div className={styles.contactsText}><a className={styles.contactsTel} href="tel:+79600575313"><FontAwesomeIcon icon={faPhone}/> 8-960-057-53-13</a></div>
                <div className={styles.contactsText}><FontAwesomeIcon icon={faLocationDot}/> Russian Federation , Kazan</div>
            </div>
        </div>
    );
}

export default MyLabel;