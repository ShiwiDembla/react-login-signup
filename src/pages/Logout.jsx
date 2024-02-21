// import React from 'react'

import { useEffect } from "react"
import { useAuth } from "../store/auth-store"
import {  Navigate } from "react-router-dom"

export default function Logout() {
    // name removeToken must be same as in auth-store.jsx
    const {removeToken}   = useAuth()
    useEffect(() => {
        removeToken()
        // localStorage.removeItem("token")
        // window.location.href = "/login"
        console.log("logged out")
    }
    , [Logout] )

  return <Navigate to="/login" />;
}
