import { CONFIGS } from "@/configs";
import { AuthFormProps } from "@/types/Auth";
import axios from "@/api/axios";

const apiVersion = CONFIGS.URL.API_VERSION
export const APIVersion1LoginUser = async (data: AuthFormProps) =>
    axios.post(`/auth/${apiVersion}/login`, data).then((res) => res.data)

export const APIVersion1RegisterUser = async (data: AuthFormProps) =>
    axios.post(`/register/${apiVersion}/`, data).then((res) => res.data)