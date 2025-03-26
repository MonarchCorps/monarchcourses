import {
    createContext,
    useEffect,
    useState
} from "react";
import { getRefreshToken } from "@/helper/token";
import { jwtDecode } from "jwt-decode";
import { TokenExpiredContextType } from "@/types/Token";

const TokenExpiredContext = createContext<TokenExpiredContextType>({
    isTokenExpired: null,
    checkTokenExpiration: async () => { }
});

export const TokenExpiredProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTokenExpired, setIsTokenExpired] = useState<boolean | null>(null);

    const checkTokenExpiration = async () => {
        try {
            const refreshToken = await getRefreshToken();
            if (refreshToken) {
                const { exp } = jwtDecode<{ exp: number }>(refreshToken);
                const isExpired = new Date(exp * 1000).getTime() < new Date().getTime();
                setIsTokenExpired(isExpired);
            } else {
                setIsTokenExpired(true); // No token found, consider it expired
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            setIsTokenExpired(true); // Error decoding, consider it expired
        }
    };

    useEffect(() => {
        checkTokenExpiration();
    }, []);

    return (
        <TokenExpiredContext.Provider
            value={{
                isTokenExpired,
                checkTokenExpiration
            }}>
            {children}
        </TokenExpiredContext.Provider>
    );
};

export default TokenExpiredContext