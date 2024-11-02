import React, { useState, useEffect, createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  useEffect(() => {
    const { employees } = getLocalStorage()
    setUserData({ employees })
  }, [])

  

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider