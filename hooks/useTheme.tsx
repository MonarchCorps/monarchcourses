import ThemeContext from '@/context/ThemeContext';
import { ThemeContextType } from '@/types/Theme';
import { useContext } from 'react'

const useTheme = () => {
    return useContext<ThemeContextType>(ThemeContext);
}

export default useTheme;