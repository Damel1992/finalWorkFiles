import React from 'react';

function TableItem({user:{id,name,age,gender,address,url}}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{address}</td>
            <td><img src={url} style={{width:'100px'}} alt={name}/></td>
            
        </tr>
    );
}

export default TableItem;