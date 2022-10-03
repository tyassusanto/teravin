import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const DetailEmployee = () => {
    const navigate = useNavigate()
    const backToTable = () => {
        navigate('/')
    }
    return (
        <Fragment>
            <div className="">
                <div className="card mx-auto my-5" style={{ width: '50vw', height: '85vh' }}>
                    <div className="card-body m-5">
                        <h5 className="card-title mb-4">Add Employee</h5>
                        <div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>ID</p>
                                <p className='m-0' style={{ width: '70%' }}>111111</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Name</p>
                                <p className='m-0' style={{ width: '70%' }}>Tyas Susanto</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Email</p>
                                <p className='m-0' style={{ width: '70%' }}>tyas@mail.com</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Mobile</p>
                                <p className='m-0' style={{ width: '70%' }}>08211</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Birthdate</p>
                                <p className='m-0' style={{ width: '70%' }}>14 Maret 1998</p>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0' style={{ width: '30%' }}>Address</p>
                                <p className='m-0' style={{ width: '70%' }}>Jakarta</p>
                            </div>
                            <span className='d-flex position-absolute bottom-0 end-0 m-5'>
                                <button className='btn btn-sm btn-outline-secondary me-3' onClick={backToTable}>Close</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DetailEmployee