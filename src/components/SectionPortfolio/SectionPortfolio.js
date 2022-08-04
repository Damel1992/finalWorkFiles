import React from 'react';
import Heading2 from '../Heading2/Heading2';
import styles from './SectionPortfolio.module.scss';
import Portfolio from '../Portfolio/Portfolio';

 const img = [{
    "url": "./images/fashionStore-min.jpg",
    "text": "Online fashion store - Homepage",
 },{
    "url": "./images/reebok-min.jpg",
    "text": "Reebok Store - Concept",
 },{
    "url": "./images/braun-min.jpg",
    "text": "Braun Landing Page - Concept",
 }];


function SectionPortfolio(props) {
    return (
        <div  className={styles.SectionPortfolio}>
            <a id='Portfolio'><Heading2 Heading2 = "Portfolio"/></a>
            <Portfolio image = {img}/>
        </div>
    );
}

export default SectionPortfolio;