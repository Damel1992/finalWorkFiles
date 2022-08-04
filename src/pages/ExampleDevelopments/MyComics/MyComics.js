import React from 'react';
import CatalogList from '../../../components/CatalogList/CatalogList';
import MyHeading from '../../../components/MyHeading/MyHeading';
import styles from './MyComics.module.scss';

function MyComics(props) {
    return (
        <div className={styles.MyComics}>
            <MyHeading heading='Comics Catalog API'/>
            <CatalogList/>
        </div>
    );
}

export default MyComics;