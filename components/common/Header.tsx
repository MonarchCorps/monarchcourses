import useTheme from '@/hooks/useTheme'
import { fontSizes } from '@/themes/App'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

export default function Header({
    title, children
}: {
    title?: string;
    children?: React.ReactNode
}): React.ReactElement {
    const { theme } = useTheme()

    return (
        <View
            className='flex-row items-center'
            style={{
                height: verticalScale(25),
                backgroundColor: theme.dark ? "#131313" : "#fff",
                paddingHorizontal: scale(10),
                paddingBottom: verticalScale(5),
                shadowColor: theme.dark ? "#fff" : "#000",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 1,
                elevation: 5
            }}
        >
            <Pressable
                onPress={() => router.back()}
                className='flex-row items-center'
                style={{
                    gap: scale(5)
                }}
            >
                <AntDesign
                    name='left'
                    size={scale(22)}
                    color={theme.dark ? "#fff" : "#000"}
                />
                <Text
                    className={`${theme.dark ? "text-[#fff]" : "text-[#000]"}`}
                    style={{
                        fontSize: fontSizes.FONT20
                    }}
                >
                    Back
                </Text>
            </Pressable>
            <Text
                className={`text-center ${theme.dark ? "text-[#fff]" : "text-[#000]"}`}
                style={{
                    width: scale(220),
                    fontSize: fontSizes.FONT22
                }}
            >
                {title}
                {children}
            </Text>
        </View>
    )
}