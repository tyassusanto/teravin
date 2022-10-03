import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'

const EmployeeList = () => {
    return (
        <div className='m-4'>
            <Header />
            <Table />
            <Footer />
        </div>
    )
}

export default EmployeeList