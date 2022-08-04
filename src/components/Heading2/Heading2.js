import React from 'react';
import styles from './Heading2.module.scss';


function Heading2(props) {
    return (
        <div>
            <p className={styles.Heading2}>{props.Heading2}</p>
        </div>
    );
}

export default Heading2;