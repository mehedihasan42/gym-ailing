import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRouter = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user) {
        return children;
    }
      //TODO: navigate it to login page {}
    return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivetRouter;