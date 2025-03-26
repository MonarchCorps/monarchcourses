export type TokenExpiredContextType = {
    isTokenExpired: boolean | null;
    checkTokenExpiration: () => Promise<void>;
}