import React from 'react';
import styles from "./SectionSkills.module.scss"
import SectionSkillsItems from "../SectionSkillsItems/SectionSkillsItems"
import Heading2 from "../Heading2/Heading2"
import Text from "../Text/Text"



function SectionSkills(props) {
    return (
        <div className={styles.SectionSkills}>
            <a id='Skills'></a><Heading2 Heading2 = "Skills"/><a/>
            <Text text1 = "I work in such programs as"/>
            <SectionSkillsItems/>
        </div>

    );
}

export default SectionSkills;
