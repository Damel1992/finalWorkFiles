import React from 'react';
import MyCalculator from '../../../components/MyCalculator/MyCalculator';
import MyHeading from '../../../components/MyHeading/MyHeading';
import styles from './Calculator.module.scss';

function Calculator(props) {
    return (
        <div className={styles.Calculator}>
            <MyHeading heading='Calculator'/>
            <MyCalculator/>
        </div>
    );
}

export default Calculator;