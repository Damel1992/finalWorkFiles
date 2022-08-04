import React from 'react';
import styles from './PortfolioItem.module.scss';
import Text from '../Text/Text';



function PortfolioItem({Image:{url,text}}) {
    const StyleText = {
        color: "black",
        textDecoration: "underline"
    };
    return (
        <div className={styles.PortfolioItem}>"
            <img src={url} style={{paddingBottom: "40px",width: "100%"}}/>
            <a style={StyleText}><Text text1 ={text} /></a>
        </div>
    );
}

export default PortfolioItem;