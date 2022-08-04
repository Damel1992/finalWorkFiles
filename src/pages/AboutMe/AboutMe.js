import React from 'react';
import MainMenu from '../../components/MainMenu/MainMenu';
import MyHeading from '../../components/MyHeading/MyHeading';
import MyLabel from '../../components/MyLabel/MyLabel';
import MyText from '../../components/MyText/MyText';
import styles from './AboutMe.module.scss';

function AboutMe(props) {
    return (
        <div className={styles.AboutMe}>
            <MainMenu/>
            <div className={styles.siteBorder}>
                <div className={styles.site}>
                    <MyLabel/>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className={styles.Column6}>
                                <MyHeading heading='Experience'/>
                                <MyText //head1='Freelance'
                                        //head2='Company'
                                        // text1='Работал на фрилансе с 2018 года до конца 2021 года, разрабатывал различные SPA , Лендинги'
                                        text2='Опыта работы в компании не имею, на данный момент планирую трудоустроится на интересный проект'
                                />
                                <MyHeading heading='Education'/>
                                <MyText head1='Programmer'
                                        head2='AVENUE SCHOOL'
                                        text1='3 года учился в колледже компьютерных технологий'
                                        text2='Прошел 6 месячные курсы по Full Stack Frontend разработке'
                                />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className={styles.Column6}>
                                <MyHeading heading='Skills'/>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className={styles.skillHead}>HTML</p>
                                        <p className={styles.skillHead}>CSS / SCSS / SASS</p>
                                        <p className={styles.skillHead}>Java Script</p>
                                        <p className={styles.skillHead}>React</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className={styles.skillHead}>BOOTSTRAP</p>
                                        <p className={styles.skillHead}>Figma</p>
                                        <p className={styles.skillHead}>Photoshop</p>
                                        <p className={styles.skillHead}>API</p>
                                    </div>
                                </div>
                                <MyHeading heading='References'/>
                                <MyText head1='Телефон'
                                        head2='Электронная почта'
                                        text1='8-960-057-53-13'
                                        text2='linux1992@inbox.ru'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;