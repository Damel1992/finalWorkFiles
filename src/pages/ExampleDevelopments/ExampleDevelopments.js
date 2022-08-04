import React from 'react';
import DevelopLink from '../../components/DevelopLink/DevelopLink';
import MainMenu from '../../components/MainMenu/MainMenu';
import styles from './ExampleDevelopments.module.scss';
import {Route, Routes} from "react-router-dom"
import Table from './Table/Table';
import MyTimer from './MyTimer/MyTimer';
import MyHeading from '../../components/MyHeading/MyHeading';
import Calculator from '../ExampleDevelopments/Calculator/Calculator';
import MyComics from '../ExampleDevelopments/MyComics/MyComics';


function ExampleDevelopments(props) {
    return (
        <div className={styles.ExampleDevelopments}>
            <MainMenu/>
            <div className={styles.siteBorder}>
                <div className={styles.site}>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <DevelopLink/>
                        </div>
                        <div className='col-sm-9'>
                            <div className={styles.DevelopVisual}>
                                <Routes>
                                    <Route path="" element={<MyHeading heading='Выберите элемент из списка'/>}/>
                                    <Route path="Table" element={<Table/>}/>
                                    <Route path="MyTimer" element={<MyTimer/>}/>
                                    <Route path="Calculator" element={<Calculator/>}/>
                                    <Route path="Comics" element={<MyComics/>}/>
                                </Routes> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExampleDevelopments;