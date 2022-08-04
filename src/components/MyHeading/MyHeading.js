import React from 'react';
import styles from './MyHeading.module.scss'

function MyHeading(props) {
    return (
        <div>
            <h3 className={styles.MyHeading}>{props.heading}</h3>
        </div>
    );
}

export default MyHeading;