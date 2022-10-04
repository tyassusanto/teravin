import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
    const navigate = useNavigate()
    const backToTable = () => {
        navigate('/')
    }

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
        axios.post(`http://localhost:3001/user/add`, form)
            .then((res) => {
                alert('Success Add Employee')
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
                                <p className='m-0'>Name</p>
                                <input className='px-2' style={{ width: '70%' }} 
                                type="text"
                                placeholder='Name'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Email</p>
                                <input className='px-2' style={{ width: '70%' }} 
                                type="email"
                                placeholder='Email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Mobile</p>
                                <input className='px-2' style={{ width: '70%' }}
                                type="text"
                                placeholder='Mobile'
                                name='mobile'
                                value={form.mobile}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex mb-4'>
                                <p className='m-0' style={{ width: '30%' }} >Birthdate</p>
                                <input className='px-2' style={{ width: '25%' }}
                                type="text"
                                placeholder='YYYY-MM-DD'
                                name='birthdate'
                                value={form.birthdate}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Address</p>
                                <input className='px-2' style={{ width: '70%' }}
                                type="text"
                                placeholder='Address'
                                name='adress'
                                value={form.adress}
                                onChange={handleChange}
                                />
                            </div>
                            <span className='d-flex position-absolute bottom-0 end-0 m-5'>
                                <button className='btn btn-sm btn-outline-secondary me-3' onClick={backToTable}>Cancel</button>
                                <button className='btn btn-sm btn-outline-secondary' onSubmit={handleSubmit}>Submit</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddEmployee