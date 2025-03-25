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
