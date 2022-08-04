import React from 'react';
import styles from './Contacts.module.scss';
import Heading2 from '../Heading2/Heading2';
import Text from '../Text/Text';

function Contacts(props) {
    const Head = {
        backgroundColor: "black",
        borderRadius: "25px",
        padding: "10px 15px"
    }
    return (
        <div className={styles.Contacts}>
            <a id='Contacts'><Heading2 Heading2 = "Contacts"/></a>
                <Text 
                text1 = "Want to know more or just chat?"
                text2 = "You are welcome!"            
                />
            <button className={styles.ContactsBtn}>Send Message</button>
            <div className={styles.social}>
                <img src='./images/cont1.png'/>
                <img src='./images/cont2.png'/>
                <img src='./images/cont3.png'/>
                <img src='./images/cont4.png'/>
            </div>
            <div className={styles.ContactsSocial}>
                <p className={styles.ContactsSocialText}>Like me on</p>
                <a className={styles.ContactsSocialText} href='#'>LinkedIn</a><span>, </span>
                <a className={styles.ContactsSocialText} href=''>Instagram</a><span>, </span>
                <a className={styles.ContactsSocialText} href=''>Behance</a><span>, </span> 
                <a className={styles.ContactsSocialText} href=''>Dribble</a>
            </div>
        </div>
    );
}
export default Contacts;

