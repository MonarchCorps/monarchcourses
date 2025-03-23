import Slide from "@/components/onboarding/Slide";
import Slider from "@/components/onboarding/Slider";
import { onBoardingSlides } from "@/configs/onboarding";
import { fontSizes, windowHeight, windowWidth } from "@/themes/App";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    Platform,
    Pressable,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router"

function OnboardingScreen() {
    const [index, setIndex] = useState(0);
    const prev = onBoardingSlides[index - 1];
    const next = onBoardingSlides[index + 1];

    const handlePress = () => {
        if (index === 2) {
            router.replace("/(auth)/sign-in")
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <GestureHandlerRootView className={`flex-1`}>
            <Slider
                key={index}
                index={index}
                setIndex={setIndex}
                prev={
                    prev && (
                        <Slide
                            slide={prev}
                        />
                    )
                }
                next={
                    next && (
                        <Slide
                            slide={next}
                        />
                    )
                }
            >
                <Slide
                    slide={onBoardingSlides[index]}
                />
            </Slider>

            <View
                className={`absolute`}
                style={{
                    flexDirection: "row",
                    bottom: windowHeight(37),
                    left: windowWidth(20),
                    gap: windowWidth(10)
                }}>
                {Array.from({ length: onBoardingSlides.length }).map((_, i) => (
                    <TouchableOpacity
                        onPress={() => setIndex(i)}
                        key={i}
                        style={{
                            height: windowHeight(7),
                            width: windowWidth(45),
                            backgroundColor: i === index ? "white" : "rgba(255, 255, 255, 0.5)",
                        }}
                        className="rounded-md"
                    />
                ))}
            </View>

            {index <= onBoardingSlides.length - 1 && (
                <LinearGradient
                    colors={["#6D55FE", "#8976FC"]}
                    style={{
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                        right: windowWidth(25),
                        bottom: windowHeight(35),
                        marginTop: windowHeight(30),
                        width: windowWidth(140),
                        height: windowHeight(38),
                        borderRadius: 10
                    }}
                >
                    <Pressable
                        className={`flex-row items-center justify-center size-full`}
                        onPress={handlePress}
                    >
                        <Text
                            className={`text-white font-bold`}
                            style={{ fontSize: fontSizes.FONT20 }}>Next</Text>
                    </Pressable>
                </LinearGradient>
            )}

            {index < onBoardingSlides.length - 1 && (
                <TouchableOpacity
                    className='absolute items-center justify-center z-[1000] rounded-full'
                    style={{
                        width: windowWidth(50),
                        height: windowWidth(50),
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        right: windowWidth(10),
                        top: Platform.OS === "ios" ? windowHeight(315) : windowHeight(348),
                    }}
                    onPress={handlePress}
                >
                    <Ionicons name="chevron-forward-outline" size={fontSizes.FONT26} color="black" />
                </TouchableOpacity>
            )}
            <StatusBar backgroundColor='#161622' />
        </GestureHandlerRootView>
    );
}

export default OnboardingScreen