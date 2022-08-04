import React from 'react';
import styles from "./MainImage.module.scss";
import Photo from "./images/MainPhoto.jpg";

function MainImage(props) {
    return (
        <div>
            <img src={Photo} alt="" className={styles.MainImage}/>
        </div>
    );
}

export default MainImage;
