import React from 'react'

const Footer = () => {
    return (
        <div className='d-flex position-absolute bottom-0 start-50 translate-middle-x mb-5'>
            <div className="left d-flex align-items-center">
                <p className='me-2'>show</p>
                <div class="btn-group">
                    <button class="btn btn-outline-secondary btn-sm dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        10
                    </button>
                    <ul class="dropdown-menu">
                    </ul>
                </div>
            </div>
            <div className="right d-flex">
                <p className='me-2'>First</p>
                <p className='me-2'>Previous</p>
                <p className='me-2'>[Page 1 of 1]</p>
                <p className='me-2'>Next</p>
                <p>Last</p>
            </div>
        </div>
    )
}

export default Footer