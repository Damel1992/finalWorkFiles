import React from 'react';
import MyHeading from '../../../components/MyHeading/MyHeading';
import Timer from '../../../components/Timer/Timer';
import styles from './MyTimer.module.scss';


function MyTimer(props) {
    return (
        <div className={styles.MyTimer}>
            <MyHeading heading='Timer'/>
            <Timer/>
        </div>
    );
}

export default MyTimer;