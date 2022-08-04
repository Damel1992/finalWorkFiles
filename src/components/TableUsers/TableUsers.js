import React from 'react';
import Table from 'react-bootstrap/Table';
import TableHeading from '../TableHeading/TableHeading';
import TableItem from '../TableItem/TableItem'
import styles from './TableUsers.module.scss'


function TableUsers({heading,users}) {
    return (
        <div >
           <Table  hover bordered responsive variant="dark">
                <thead>
                    <tr>
                        {heading.map((elem,i)=> <TableHeading HeadingItem={elem} key={i}/>)}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i) => <TableItem user={user} key={i}/>)}
                </tbody>
           </Table>
        </div>
    );
}
export default TableUsers;