import React from 'react';
import styles from './Text.module.scss';


function Text(props) {
    let status = true
    return (
        <div className={styles.Text}>
            <p>{props.text1}</p>
            {
                status && <p>{props.text2}</p>
            }
        </div>
    );
}

export default Text;