import React from 'react';
import styles from "./Section.module.scss"


function Section(props) {
    return (
        <div>
            <section className={styles.Section}>
                {props.children}
            </section>

        </div>
    );
}

export default Section;
