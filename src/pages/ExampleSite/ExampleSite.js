import React from 'react';
import styles from './ExampleSite.module.scss';
import MainMenu from '../../components/MainMenu/MainMenu';
import Section from "../../components/Section/Section";
import Navbar from "../../components/Navbar/Navbar";
import AboutLine from "../../components/AboutLine/AboutLine";
import MainImage from "../../components/MainImage/MainImage";
import SectionSkills from "../../components/SectionSkills/SectionSkills";
import Section2 from '../../components/Section2/Section2';
import SectionPortfolio from '../../components/SectionPortfolio/SectionPortfolio';
import Contacts from '../../components/Contacts/Contacts';


function ExampleSite(props) {
    return (
        <div className={styles.ExampleSite}>
            <MainMenu/>
            <div className={styles.siteBorder}>
                <div className={styles.site}>
                    <Section>
                        <Navbar/>
                        <AboutLine/>
                        <MainImage/>
                    </Section>
                    <Section2/>
                    <SectionSkills/>
                    <SectionPortfolio/>
                    <Contacts/>
                </div>
            </div>
        </div>
    );
}

export default ExampleSite;