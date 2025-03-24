import * as SecureStore from 'expo-secure-store'

type TokenType = "accessToken" | "refreshToken"

interface TokenStorage {
    accessToken?: string,
    refreshToken?: string
}

const ACCESS_TOKEN_KEY = "course_platform_accessToken"
const REFRESH_TOKEN_KEY = "course_platform_refreshToken"

const safeParse = <T>(data: string | null): T | null => {
    try {
        return data ? JSON.parse(data) as T : null;
    } catch (error) {
        console.error('JSON parse error:', error)
        return null
    }
}

/**
 * Refresh Token Handlers
 */

export const getRefreshToken = async (): Promise<string | null> => {
    try {
        const storedData = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
        const parsed = safeParse<TokenStorage>(storedData)
        return parsed?.refreshToken ?? null;
    } catch (error) {
        console.error("Error retrieving refresh token:", error);
        return null;
    }
};

export const storeRefreshToken = async (refreshToken: string): Promise<void> => {
    try {
        const data: TokenStorage = { refreshToken };
        await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error storing refresh token:', error);
    }
};

export const removeRefreshToken = async (): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
    } catch (error) {
        console.error('Error removing refresh token:', error);
    }
};

/**
 * 
 * accessToken
 */

export const getAccessToken = async (): Promise<string | null> => {
    try {
        const storedData = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
        const parsed = safeParse<TokenStorage>(storedData);
        return parsed?.accessToken ?? null;
    } catch (error) {
        console.error('Error retrieving access token:', error);
        return null;
    }
};

export const storeAccessToken = async (accessToken: string): Promise<void> => {
    try {
        const data: TokenStorage = { accessToken };
        await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error storing access token:', error);
    }
};

export const removeAccessToken = async (): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
    } catch (error) {
        console.error('Error removing access token:', error);
    }
};


export const removeUserDetails = async (): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync("course_platform_user_details");
    } catch (error) {
        console.error("Error removing user details:", error);
    }
}


export const clearStorage = async (): Promise<void> => {
    try {
        await removeUserDetails()
        await removeAccessToken()
        await removeRefreshToken()
    } catch (error) {
        console.error("Error clearing storage", error)
    }
}