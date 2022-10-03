import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const moveToAdd = () => {
        navigate('/add')
    }
    return (
        <div className='d-flex flex-row-reverse'>
            <div class="input-group mb-3 ">
                <h3 className='flex-grow-1'>List Employee</h3>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search by name"
                    aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary me-3" type="button" id="button-addon2">Search</button>
                <button class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={moveToAdd}>Add</button>
            </div>
        </div>
    )
}

export default Header