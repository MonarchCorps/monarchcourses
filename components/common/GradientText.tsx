import { View, Text } from 'react-native'
import { Style } from 'react-native-css-interop/dist/types'
import MaskedView from "@react-native-community/masked-view"
import { LinearGradient } from "expo-linear-gradient"

export default function GradientText({
    text,
    className,
    styles
}: {
    text: string,
    className: string,
    styles: Style
}) {
    return (
        //@ts-ignore
        <MaskedView
            maskElement={
                <Text
                    className={className}
                    style={[styles, { backgroundColor: "transparent" }]}
                >
                    {text}
                </Text>
            }
        >
            <LinearGradient
                colors={["#021940", "#8976FC"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text
                    className={className}
                    style={[styles, { opacity: 0 }]}
                >
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    )
}