import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const ListTable = () => {

    const navigate = useNavigate()

    const moveToEdit = () => {
        navigate('/edit')
    }

    const moveToDetail = () => {
        navigate('/detail')
    }

    const moveToDelete = () => {
        navigate('/delete')
    }

    return (
        <Fragment>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Jacob</td>
                    <td>Thornton@mail</td>
                    <td>08211</td>
                    <td>
                        <button className='btn btn-outline-secondary btn-sm' onClick={moveToDetail}>Detail</button>
                        <button className='btn btn-outline-secondary btn-sm mx-2' onClick={moveToEdit}>Edit</button>
                        <button className='btn btn-outline-secondary btn-sm'onClick={moveToDelete}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </Fragment>
    )
}

export default ListTable