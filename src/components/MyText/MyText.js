import React from 'react';
import styles from './MyText.module.scss'

function MyText(props) {
    return (
        <div>
            <p className={styles.myText1}>{props.head1}</p>
            <p className={styles.myText2}>{props.text1}</p>
            <p className={styles.myText1}>{props.head2}</p>
            <p className={styles.myText2}>{props.text2}</p>
        </div>
    );
}

export default MyText;