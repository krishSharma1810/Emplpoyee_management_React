import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import {AuthContext } from './context/AuthProvider'


const App = () => {


  const [user, setUser] = useState(null)

   const HandleLogin = (email,password) =>{
    if (email === 'admin@example.com' && password === "123"){
      setUser('admin')
    }
    else if(email === 'employee3@gmail.com' && password === "123"){
      setUser('employee')
    }
    else {
      alert("Invalid credentials !!!")
    }
   }

   const data= useContext(AuthContext)
   console.log(data)

  return (
    <>
      {/* if no user then open login page else none */}
      {!user ? <Login HandleLogin={HandleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : (user === 'employee' ?  <EmployeeDashboard /> : null)}

    </>
  )
}

export default App