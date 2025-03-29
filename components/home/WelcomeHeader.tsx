import useAuth from '@/hooks/useAuth'
import useTheme from '@/hooks/useTheme'
import {
    fontSizes,
    IsAndroid,
    IsHaveNotch,
    IsIPAD,
    windowHeight,
    windowWidth
} from '@/themes/App'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Pressable, TextInput,
} from 'react-native'
import {
    moderateScale,
    scale,
    verticalScale
} from "react-native-size-matters"

export default function WelcomeHeader() {
    const { theme } = useTheme()
    const { auth } = useAuth()
    const [notificationLength, setNotificationLength] = useState<number>(8)

    return (
        <LinearGradient
            colors={
                theme.dark
                    ? ["#3c43485c", "#3c43485c", "#3c43485c"]
                    : ["#75ABFC", "#0047AB"]
            }
            start={theme.dark ? { x: 1, y: 1 } : { x: 1, y: 1 }}
            end={theme.dark ? { x: 0, y: 1 } : { x: 0, y: 1 }}
            style={[styles.headerWrapper]}
        >
            <StatusBar
                barStyle={IsAndroid ? "dark-content" : "light-content"}
            />

            <View className='flex-row justify-between' style={{
                paddingTop:
                    IsHaveNotch
                        ? IsIPAD
                            ? verticalScale(30)
                            : verticalScale(40)
                        : verticalScale(30)
            }}>

                <View>
                    <Text className='text-white font-psemibold' style={{
                        fontSize: fontSizes.FONT32
                    }}>
                        Hi {auth?.user.email.split("@")[0]}
                    </Text>
                    <Text className='text-white font-pregular' style={{
                        fontSize: fontSizes.FONT22
                    }}>
                        Let's Start Learning
                    </Text>
                </View>

                <View className='flex-row'>
                    <Pressable>
                        <View
                            className={`relative items-center justify-center rounded-md ${theme.dark ? "bg-transparent border-1 border-white" : " bg-[#004FAB]"}`}
                            style={{
                                width: scale(45),
                                height: scale(45)
                            }}>
                            <Ionicons
                                name="notifications-sharp"
                                size={scale(22)}
                                color={"#fff"}
                            />
                            <View
                                className='absolute items-center justify-center bg-[#19C964]'
                                style={[styles.dot]}>
                                <Text
                                    className={`text-white`}
                                    style={{
                                        fontSize: fontSizes.FONT14
                                    }}
                                >
                                    {notificationLength <= 9 ? notificationLength : `9+`}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View className='relative'>
                <TextInput
                    className={`font-pregular ${theme.dark ? "border-[1px] border-white text-white bg-transparent" : "bg-white color-black"}`}
                    placeholder='Search for Topics, Courses'
                    placeholderTextColor={theme.dark ? "#fff" : "#000"}
                    style={[styles.input]}
                />
                <Pressable
                    className='absolute'
                    style={{
                        right: windowWidth(10),
                        top: windowHeight(16)
                    }}
                >
                    <EvilIcons
                        name='search'
                        size={IsIPAD ? scale(20) : scale(30)}
                        color={theme.dark ? "#fff" : "blue"}
                    />
                </Pressable>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: IsHaveNotch
            ? IsIPAD
                ? verticalScale(165)
                : verticalScale(165)
            : IsAndroid
                ? verticalScale(168)
                : verticalScale(162),
        paddingHorizontal: scale(25),
        borderBottomLeftRadius: moderateScale(40),
        borderBottomRightRadius: moderateScale(40),
        paddingTop: IsAndroid ? verticalScale(10) : verticalScale(15)
    },
    dot: {
        width: scale(13.5),
        height: scale(13.5),
        borderRadius: scale(10),
        right: windowWidth(15),
        top: windowHeight(10)
    },
    input: {
        height: IsHaveNotch
            ? verticalScale(35)
            : verticalScale(40),
        marginTop: verticalScale(12),
        fontSize: IsIPAD
            ? fontSizes.FONT15 : fontSizes.FONT19,
        borderRadius: moderateScale(30),
        paddingHorizontal: scale(15)
    }
})