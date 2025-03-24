import { APIVersion1LoginUser, APIVersion1RegisterUser } from "@/http/v1"
import { AuthFormProps, AuthData } from "@/types/Auth"
import { ErrorResponse } from "@/types/Error"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

export const useLoginUser = () => {
    return useMutation<
        AuthData,
        AxiosError<ErrorResponse>,
        AuthFormProps
    >({
        mutationFn: (data) => APIVersion1LoginUser(data),
    })
}

export const useRegisterUser = () => {
    return useMutation<
        AuthData,
        AxiosError<ErrorResponse>,
        AuthFormProps
    >({
        mutationFn: (data) => APIVersion1RegisterUser(data)
    })
}