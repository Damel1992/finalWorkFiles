import React from 'react';
import styles from "./SectionSkillsItems.module.scss";
import Figma from "./images/Figma1.png"
import Ps from "./images/Ps1.png"
import Ae from "./images/Ae1.png"
import Ai from "./images/Ai1.jpg"
import { ReactComponent as Level} from "./images/Star.svg"

const StyleStar = styles.Star + ' ' + styles.StarOff;

function SectionSkillsItems(props) {
    return (
        <div className={styles.LineSkills}>
            <div className={styles.LineSkillsItem}>
                <img src={Ae}/>
                <p>After Effects</p>
                <div>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level/>
                    </object>
                </div>
            </div>
            <div className={styles.LineSkillsItem}>
                <img src={Ps}/>
                <p>Photoshop</p>
                <div>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level/>
                    </object>
                </div>
            </div>
            <div className={styles.LineSkillsItem}>
                <img src={Ai}/>
                <p>Adobe Illustrator</p>
                <div>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level/>
                    </object>
                    <object>
                        <Level/>
                    </object>
                </div>
            </div>
            <div className={styles.LineSkillsItem}>
                <img src={Figma}/>
                <p>Figma</p>
                <div>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level className={styles.Star}/>
                    </object>
                    <object>
                        <Level />
                    </object>
                </div>
            </div>
        </div>
    );
}

export default SectionSkillsItems;
