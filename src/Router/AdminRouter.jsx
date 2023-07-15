import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from '../hooks/useAdmin';

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin,adminLoading] = useAdmin()
    const location = useLocation();

    if (loading || adminLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isAdmin) {
        return children;
    }
      //TODO: navigate it to login page {to='/login'}
    return <Navigate to='/' state={{ from: location }}></Navigate>

};

export default AdminRouter;