import axios from 'axios'
import dateFormat from 'dateformat'
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const DeleteEmployee = () => {
    const navigate = useNavigate()
    const backToTable = () => {
        navigate('/')
    }

    const location = useLocation()
    const locationParams = localStorage.setItem('location', JSON.stringify(location.pathname))
    const paramsId = JSON.parse(localStorage.getItem('location'))
    const id = paramsId.split('/')[2]

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/user/detail/${id}`)
            .then((res) => {
                const result = res.data.data
                setUsers(result)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [location])

    const deleteUsers = () => {
        axios.delete(`http://localhost:3001/user/delete/${id}`)
            .then((res) => {
                const result = res.data
                setUsers(result)
                alert('Success Add Employee')
                navigate('/')
                console.log(result, 'ressssssssssssss')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const bday = users.birthdate
    const formatedDate =  dateFormat(bday, "mmmm dS, yyyy")

    return (
        <Fragment>
            <div className="">
                <div className="card mx-auto my-5" style={{ width: '50vw', height: '85vh' }}>
                    <div className="card-body m-5">
                        <h5 className="card-title mb-4">Add Employee</h5>
                        <div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>ID</p>
                                <p className='m-0' style={{ width: '70%' }}>{users.id}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Name</p>
                                <p className='m-0' style={{ width: '70%' }}>{users.name}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Email</p>
                                <p className='m-0' style={{ width: '70%' }}>{users.email}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Mobile</p>
                                <p className='m-0' style={{ width: '70%' }}>{users.mobile}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Birthdate</p>
                                <p className='m-0' style={{ width: '70%' }}>{formatedDate}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-5'>
                                <p className='m-0' style={{ width: '30%' }}>Address</p>
                                <p className='m-0' style={{ width: '70%' }}>{users.adress}</p>
                            </div>
                            <p className='mt-3'>Are you sure want to delete this employee?</p>
                            <span className='d-flex position-absolute bottom-0 end-0 m-5'>
                                <button className='btn btn-sm btn-outline-secondary me-3' onClick={backToTable}>Cancel</button>
                                <button className='btn btn-sm btn-outline-secondary me-3' onClick={deleteUsers}>Delete</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DeleteEmployee