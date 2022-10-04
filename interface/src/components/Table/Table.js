/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ListTable from './ListTable/ListTable'
import axios from 'axios'

const Table = () => {
    const navigate = useNavigate()
    const moveToAdd = () => {
        navigate('/add')
    }

    const [users, setUsers] = useState([])
    const [page, setPage] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const querySearch = searchParams.get('name')
    // console.log(users);

    useEffect(() => {
        if (querySearch) {
            axios.get(`http://localhost:3001/user/alluser?name=${querySearch}&limit=&page=`)
                .then((res) => {
                    const result = res.data.data
                    const page = res.data.pagination
                    setUsers(result)
                    setPage(page)
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios.get(`http://localhost:3001/user/alluser?name=&limit=&page=`)
                .then((res) => {
                    const result = res.data.data
                    const page = res.data.pagination
                    setUsers(result)
                    setPage(page)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, { querySearch })

    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            setSearchParams({ name: e.target.value })
        }
    }

    return (
        <Fragment>
            {/* HEADER */}
            <div className='d-flex flex-row-reverse'>
                <div class="input-group mb-3 ">
                    <h3 className='flex-grow-1'>List Employee</h3>
                    <form className='d-flex'>
                        <input
                            className='me-2'
                            type="text"
                            placeholder="Search by name"
                            onKeyUp={handleSearch}
                            />
                        <button class="btn btn-outline-secondary me-5" type="button" id="button-addon2">Search</button>
                        <button class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={moveToAdd}>Add</button>
                    </form>
                </div>
            </div>
            {/* MAIN CONTENT */}
            <div className="table-container mt-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: '11%' }} scope="col">ID</th>
                            <th style={{ width: '38%' }} scope="col">Name</th>
                            <th style={{ width: '18%' }} scope="col">Email</th>
                            <th style={{ width: '18%' }} scope="col">Mobile</th>
                            <th style={{ width: '15%' }} scope="col">Action</th>
                        </tr>
                    </thead>
                    {users.map((user) => (
                        <ListTable
                            detail={() => navigate(`/detail/${user.id}`)}
                            edit={() => navigate(`/edit/${user.id}`)}
                            toDelete={() => navigate(`/delete/${user.id}`)}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            mobile={user.mobile}

                        />
                    ))}
                </table>
            </div>
            {/* FOOTER */}
            <div className='position-absolute bottom-0 start-50 translate-middle-x mb-2'>
                <p className='me-2'>Total : {page.totalUsers}</p>
                <div className="right d-flex">
                    <p className='me-2'>First</p>
                    <p className='me-2'>Previous</p>
                    <p className='me-2'>[Page {page.currentPage} of {page.totalPage}]</p>
                    <p className='me-2'>Next</p>
                    <p>Last</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Table