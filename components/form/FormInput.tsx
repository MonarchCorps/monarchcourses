import { fontSizes, IsIPAD, windowHeight } from "@/themes/App";
import { FormInputProps } from "@/types/FormInput";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function FormInput({
    label,
    placeholder,
    onChangeText,
    isPassword,
    value,
    error = false,
    keyboardType,
    editable,
    isLoading,
    keyboardAppearance,
    maxLength
}: FormInputProps) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (text: string) => {
        onChangeText?.(text);
    };

    const renderInput = () => {
        return (
            <View >
                <Text
                    style={{
                        fontSize: IsIPAD ? fontSizes.FONT12 : fontSizes.FONT18
                    }}
                >
                    {label}
                </Text>
                <TextInput
                    className={`px-3 rounded-xl border text-[#323539] ${error ? "border-red-500" : "border-[#D0D5DD]"}`}
                    style={{
                        marginTop: windowHeight(7),
                        fontSize: IsIPAD ? fontSizes.FONT12 : fontSizes.FONT20,
                        height: windowHeight(37)
                    }}
                    value={value}
                    maxLength={maxLength}
                    onChangeText={handleChange}
                    keyboardType={keyboardType}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    editable={editable}
                    keyboardAppearance={keyboardAppearance}
                    placeholder={placeholder}
                />

                {isPassword && (
                    <Pressable
                        onPress={() =>
                            setIsPasswordVisible(!isPasswordVisible)
                        }
                        className="absolute right-3 top-1/4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        <Text>{isPasswordVisible ? "Hide" : "Show"}</Text>
                    </Pressable>
                )}

            </View>
        );
    };

    return (
        renderInput()
    );

}