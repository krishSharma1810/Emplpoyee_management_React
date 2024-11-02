import React from 'react'
import Header from '../../other/Header'
import TaskNumberList from '../../other/TaskNumberList'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-icicic h-screen'>
            <Header />
            <TaskNumberList/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard