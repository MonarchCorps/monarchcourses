import { AuthContext } from '@/context/AuthContext';
import { AuthContextType } from '@/types/Auth';
import { useContext } from 'react'

const useAuth = () => {
    return useContext<AuthContextType>(AuthContext);
}

export default useAuth;