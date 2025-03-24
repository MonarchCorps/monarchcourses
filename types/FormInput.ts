import { KeyboardType, ReturnKeyTypeOptions, TextInput } from "react-native";

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
    returnKeyType?: ReturnKeyTypeOptions;
    inputRef?: React.RefObject<TextInput>;
    onSubmitEditing?: () => void;
}