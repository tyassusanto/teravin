import React from 'react'
import ListTable from './ListTable/ListTable'

const Table = () => {
    return (
        <div className="table-container mt-4">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th style={{width:'11%'}} scope="col">ID</th>
                        <th style={{width:'38%'}} scope="col">Name</th>
                        <th style={{width:'18%'}} scope="col">Email</th>
                        <th style={{width:'18%'}} scope="col">Mobile</th>
                        <th style={{width:'15%'}} scope="col">Action</th>
                    </tr>
                </thead>
                <ListTable/>
            </table>
        </div>
    )
}

export default Table