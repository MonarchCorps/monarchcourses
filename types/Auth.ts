export type AuthFormProps = {
    email: string;
    password: string;
};

export type AuthData = {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
    };
};

export type SimplifiedAuthData = Omit<AuthData, "accessToken" | "refreshToken">;

export type AuthContextType = {
    auth: SimplifiedAuthData | null;
    setAuth: (newAuth: SimplifiedAuthData) => Promise<void>;
    loading: boolean;
}
