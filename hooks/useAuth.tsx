import { AuthContext, AuthContextProps } from '@/context/AuthContext';
import { useContext } from 'react'

const useAuth = () => {
    return useContext<AuthContextProps>(AuthContext);
}

export default useAuth;