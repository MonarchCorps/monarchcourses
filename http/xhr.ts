import { CONFIGS } from "@/configs";
import { clearStorage, getAccessToken, getRefreshToken, storeAccessToken } from "@/helper/token";
import axios, { AxiosError } from "axios"
import { router } from "expo-router";

const baseURL = CONFIGS.URL.API_BASE_URL;

export const axiosPrivate = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    withCredentials: true,
});

const $http = axiosPrivate;

$http.interceptors.request.use(
    async (config) => {
        let token = await getAccessToken();

        if (token && !config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

$http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            try {
                const newAccessToken = await refreshAuthLogic();

                await storeAccessToken(newAccessToken);
                prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return $http(prevRequest);
            } catch (refreshError) {
                if ((refreshError as AxiosError).response?.status === 401) {
                    router.replace("/(auth)/sign-in")
                    await clearStorage()
                }
            }
        } else if (error?.response?.status === 401) {
            router.replace("/(auth)/sign-in")
            await clearStorage()
        }

        return Promise.reject(error);
    }
);

const refreshAuthLogic = async () => {
    try {
        const response = await axios.post(
            `${baseURL}/auth/${CONFIGS.URL.API_VERSION}/refresh`,
            {
                refreshToken: await getRefreshToken()
            },
            {
                withCredentials: true
            });

        return response.data;
    } catch (error) {
        if ((error as AxiosError).response?.status === 401) {
            console.error("Refresh token expired or invalid");
        }
    }
}

export { $http };