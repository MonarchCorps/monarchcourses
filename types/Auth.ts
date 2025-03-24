export type AuthFormProps = {
    email: string;
    password: string;
};

export type AuthData = {
    accessToken: string;
    refreshToken: string;
    user: {
        _id: string;
        email: string;
    };
};
