export type KeyboardType = "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url"
    | "visible-password"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "name-phone-pad"
    | "twitter"
    | "web-search";

export type keyboardAppearance = "default" | "dark" | "light" | undefined

export type FormInputProps = {
    label: string;
    value?: string;
    placeholder?: string;
    onChangeText?: ((text: string) => void) | undefined,
    keyboardType?: KeyboardType,
    editable?: boolean;
    isLoading?: boolean;
    isPassword?: boolean;
    keyboardAppearance?: keyboardAppearance;
    maxLength?: number;
    error?: boolean;
}