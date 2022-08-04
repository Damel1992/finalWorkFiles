import React from 'react';
import MyHeading from '../MyHeading/MyHeading';
import styles from './DevelopLink.module.scss';
import {Link} from 'react-router-dom';

function DevelopLink(props) {
    return (
        <div>
            <div className={styles.DevelopNav}>
                <MyHeading heading='DEVELOP'/>
                <Link to='MyTimer'><button type="button" class="btn-dark">Timer</button></Link>
                <Link to='Calculator'><button type="button" class="btn-dark">Calculator</button></Link>
                <Link to='Table'><button type="button" class="btn-dark">Users Api</button></Link>
                <Link to='Comics'><button type="button" class="btn-dark">Comics Catalog</button></Link>
            </div>  

        </div>
    );
}

export default DevelopLink;