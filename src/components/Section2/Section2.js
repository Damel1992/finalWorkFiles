import React from 'react';
import styles from "./Section2.module.scss"
import Text from "../Text/Text"
import Heading2 from "../Heading2/Heading2"




function Section2(props) {
    return (
        <div className={styles.Section2}>
            <a id='About Me'><Heading2 Heading2 = "About Me"/></a>
            <Text
            text1 = "Hi, I'm Denis – UX/UI designer from Minsk."
            text2 = "I'm interested in design and everything connected with it."
            />
            <Text
            text1 = "I'm studying at courses Web and mobile design"
            text2 = "interfaces in IT-Academy"
            />
            <Text
            text1 = "Ready to implement excellent projects"
            text2 = "with wonderful people."
            />
            </div>
    );
}

export default Section2;
