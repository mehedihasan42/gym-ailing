import { useContext } from 'react';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';

const useAuth = () => {
    const useAuth = useContext(AuthContext)
    return useAuth;
};

export default useAuth;