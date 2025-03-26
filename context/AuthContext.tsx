import { AuthContextType, SimplifiedAuthData } from "@/types/Auth";
import * as SecureStore from "expo-secure-store";
import {
    createContext,
    useState,
    useEffect,
    ReactNode
} from "react";

export const AuthContext = createContext<AuthContextType>({
    auth: null,
    setAuth: async () => { },
    loading: false,
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuthState] = useState<SimplifiedAuthData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const storedAuth = await SecureStore.getItemAsync("course_platform_user_details");

                if (storedAuth) {
                    setAuthState(JSON.parse(storedAuth));
                } else {
                    setAuthState(null);
                }
            } catch (error) {
                console.error("Error loading auth data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadAuthData();
    }, []);

    const setAuth = async (newAuth: SimplifiedAuthData) => {
        try {
            const updatedAuth = { ...auth, ...newAuth };
            await SecureStore.setItemAsync("course_platform_user_details", JSON.stringify(updatedAuth));
            setAuthState(updatedAuth);
        } catch (error) {
            console.error("Error setting auth data:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};