import React from 'react';
import styles from "./AboutLine.module.scss";

function AboutLine(props) {
    return (
        <div className={styles.AboutLine}>
            <div className={styles.MyName}>
                <p>Denis</p>
                <p>Novik</p>
            </div>
            <div className={styles.MyInfo}>
                <p>UX | UI designer</p>
                <p>24 years old, Minsk</p>
            </div>
            <div className={styles.LangMode}>
                <p><span className={styles.RuMode}>RU</span> | <span className={styles.EngMode}>ENG</span></p>
            </div>
        </div>
    );
}

export default AboutLine;
