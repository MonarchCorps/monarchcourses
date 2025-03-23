import { fontSizes, windowHeight, windowWidth } from "@/themes/App";
import { BlurView } from "expo-blur";
import { Animated, Image, Platform, Pressable, Text, View } from "react-native";
import {
    responsiveFontSize as rf
} from 'react-native-responsive-dimensions'
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { makeRedirectUri, useAuthRequest } from "expo-auth-session"
import { useEffect } from "react";

function Content() {

    const configureGoogleSignIn = () => {
        if (Platform.OS === "ios") {
            GoogleSignin.configure({
                iosClientId: "com.googleusercontent.apps.506775623209-8kdls9p008a88jteavher3vphueq01uv"
            })
        } else {
            GoogleSignin.configure({
                webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_GOOGLE_API_KEY
            })
        }
    }

    useEffect(() => {
        configureGoogleSignIn()
    }, [])

    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Text
                className={`font-pbold`} style={{ fontSize: rf(3.2) }}>
                Join Monarch's Course
            </Text>
            <Text style={{
                fontSize: fontSizes.FONT18,
                paddingTop: Platform.OS === "ios" ? windowHeight(7) : windowHeight(4)
            }} className="font-semibold">
                It's easier than your imagination!
            </Text>

            <View style={{
                paddingVertical: windowHeight(20),
                flexDirection: 'row',
                gap: windowWidth(20)
            }}>
                <Pressable onPress={googleSignIn}>
                    <Image
                        source={require("@/assets/images/onboarding/google.png")}
                        style={{
                            width: windowWidth(40),
                            height: windowHeight(40),
                            resizeMode: "contain"
                        }}
                    />
                </Pressable>

                <Pressable>
                    <Image
                        source={require("@/assets/images/onboarding/github.png")}
                        style={{
                            width: windowWidth(40),
                            height: windowHeight(40),
                            resizeMode: "contain"
                        }}
                    />
                </Pressable>

                <Pressable>
                    <Image
                        source={require("@/assets/images/onboarding/apple.png")}
                        style={{
                            width: windowWidth(40),
                            height: windowHeight(40),
                            resizeMode: "contain"
                        }}
                    />
                </Pressable>
            </View>
        </>
    )
}

function IOSAuthModal() {
    return (
        <BlurView
            intensity={80}
            tint="dark"
            className="flex-1 items-center justify-center"
        >
            <Pressable
                className={`bg-[#fff] rounded-3xl items-center justify-center`}
                style={{
                    width: windowWidth(420),
                    height: windowHeight(250),
                    marginHorizontal: windowWidth(50),
                }}
                onPress={(e) => e.stopPropagation()}
            >
                <Content />
            </Pressable>
        </BlurView>
    )
}

function AndroidAuthModal({ fadeAnim }: { fadeAnim: Animated.Value }) {
    return (
        <Animated.View
            className={`flex-1 items-center justify-center`}
            style={{
                opacity: fadeAnim,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
        >
            <Animated.View
                className="bg-white rounded-3xl items-center justify-center drop-shadow-sm"
                style={{
                    height: windowHeight(250),
                    width: windowWidth(390),
                    // transform: [{ scale: scaleAnim }],
                }}
            >
                <Content />
            </Animated.View>
        </Animated.View>
    )

}
export { IOSAuthModal, AndroidAuthModal }