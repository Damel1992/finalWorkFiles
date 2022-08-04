import React from 'react';
import MyHeading from '../../../components/MyHeading/MyHeading';
import TableUsers from '../../../components/TableUsers/TableUsers';
import styles from './Table.module.scss';


function Table(props) {
    let headingArr = ['#',"Name","Age","Gender","Address","Photo"];
    let usersArr = [{
      "id": 1,
      "name": "Adam",
      "age": 33,
      "gender": "male",
      "address": "Kazan, st.Lenina, 1",
      "url": "https://i02.fotocdn.net/s125/b9f4c7d2adcdf064/gallery_m/2836843216.jpg",
    },{
      "id": 2,
      "name": "Eva",
      "age": 27,
      "gender": "female",
      "address": "Kazan, st.Lenina, 3",
      "url": "https://cosmetology-info.ru/img_lib/2016/07/1468485266_63b4.gif",
    }]
    return (
        <div className={styles.Table}>
            <MyHeading heading='Таблица API'/>
            <TableUsers  heading = {headingArr} users = {usersArr}/>
        </div>
    );
}

export default Table;