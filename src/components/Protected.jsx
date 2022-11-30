import React from 'react'
import { UserAuth } from "../context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
    const {user} = UserAuth()
    if (user === null) {
        return (<Navigate to='/' />)
    }
    return children
}

export default Protected