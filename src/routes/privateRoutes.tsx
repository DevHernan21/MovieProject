import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import { CommonProps } from '../common/Interface/CommonProps';

export const PrivateRoute = ({ children }: CommonProps) => {
    const { user } = useAuth();

    if(user){
        return <>{children}</>;
    }
    return <Navigate to="/login" replace={true} />;
};
