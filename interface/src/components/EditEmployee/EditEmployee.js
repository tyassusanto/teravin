import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const EditEmployee = () => {
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
                        <form>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>ID</p>
                                <input disabled={true} className='px-2' type="text" placeholder='111111' style={{ width: '70%' }} />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Name</p>
                                <input className='px-2' type="text" placeholder='Name' style={{ width: '70%' }} />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Email</p>
                                <input className='px-2' type="text" placeholder='Email' style={{ width: '70%' }} />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Mobile</p>
                                <input className='px-2' type="text" placeholder='Mobile' style={{ width: '70%' }} />
                            </div>
                            <div className='d-flex mb-4'>
                                <p className='m-0' style={{ width: '30%' }} >Birthdate</p>
                                <input className='px-2' type="text" placeholder='YYYY-MM-DD' style={{ width: '25%' }} />
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <p className='m-0'>Address</p>
                                <input className='px-2' type="text" placeholder='Address' style={{ width: '70%' }} />
                            </div>
                            <span className='d-flex position-absolute bottom-0 end-0 m-5'>
                                <button className='btn btn-sm btn-outline-secondary me-3' onClick={backToTable}>Cancel</button>
                                <button className='btn btn-sm btn-outline-secondary'>Submit</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditEmployee