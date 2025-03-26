import TokenExpiredContext from "@/context/TokenExpiredContext";
import { TokenExpiredContextType } from "@/types/Token";
import { useContext } from "react";

export const useTokenExpired = () => {
    return useContext<TokenExpiredContextType>(TokenExpiredContext);
};