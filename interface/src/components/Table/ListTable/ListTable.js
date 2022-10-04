import React, { Fragment } from 'react'

const ListTable = ({ id, name, email, mobile, detail, edit, toDelete }) => {
    return (
        <Fragment>
            <tbody>
                <tr>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{mobile}</td>
                    <td>
                        <button className='btn btn-outline-secondary btn-sm' onClick={detail}>Detail</button>
                        <button className='btn btn-outline-secondary btn-sm mx-2' onClick={edit}>Edit</button>
                        <button className='btn btn-outline-secondary btn-sm' onClick={toDelete}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </Fragment>
    )
}

export default ListTable