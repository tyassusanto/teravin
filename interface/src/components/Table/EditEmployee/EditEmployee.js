/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EditEmployee = () => {
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

    const [form, setForm] = useState({
        name: '',
        email: '',
        mobile: '',
        birthdate: '',
        adress: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value]
        })
        // console.log(e.target.value,'eeeeeeeeeeeeeeeee')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form,'form')
        axios.put(`http://localhost:3001/user/update/${id}`, form)
            .then((res) => {
                alert('Success Edit Employee')
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Fragment>
            <div className="">
                <div className="card mx-auto my-5" style={{ width: '50vw', height: '85vh' }}>
                    <div className="card-body m-5">
                        <h5 className="card-title mb-4">Add Employee</h5>
                        <form onSubmit={handleSubmit}>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>ID</p>
                                <input disabled={true}
                                className='px-2'
                                type="text"
                                placeholder={users.id}
                                style={{ width: '70%' }}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Name</p>
                                <input className='px-2'
                                type="text"
                                placeholder={users.name}
                                style={{ width: '70%' }}
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Email</p>
                                <input className='px-2'
                                type="text"
                                placeholder={users.email}
                                style={{ width: '70%' }}
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Mobile</p>
                                <input className='px-2'
                                type="text"
                                placeholder={users.mobile}
                                style={{ width: '70%' }} 
                                name='mobile'
                                value={form.mobile}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex mb-4'>
                                <p className='m-0' style={{ width: '30%' }} >Birthdate</p>
                                <input className='px-2'
                                type="text"
                                placeholder={users.birtdate}
                                style={{ width: '25%' }}
                                name='birthdate'
                                value={form.birthdate}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Address</p>
                                <input className='px-2'
                                type="text"
                                placeholder={users.adress}
                                style={{ width: '70%' }}
                                name='adress'
                                value={form.adress}
                                onChange={handleChange}
                                />
                            </div>
                            <span className='d-flex position-absolute bottom-0 end-0 m-5'>
                                <button className='btn btn-sm btn-outline-secondary me-3' onClick={backToTable}>Cancel</button>
                                <button className='btn btn-sm btn-outline-secondary'onSubmit={handleSubmit} >Submit</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditEmployee