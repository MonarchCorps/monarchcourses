import IconFour from "@/assets/svgs/support-center/four";
import { FAQData } from "@/constants";
import useTheme from "@/hooks/useTheme";
import { fontSizes } from "@/themes/App";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function FAQScreen() {
    const { theme } = useTheme();
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleQuestion = (id: number) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <View className="flex-1" style={{ backgroundColor: theme.dark ? "#101010" : "#fff" }}>
            <LinearGradient
                colors={!theme.dark ? ["#FAE0BC", "#FAE0BC"] : ["#8673FC", "#8673FC"]}
                style={{
                    height: verticalScale(200),
                    borderBottomLeftRadius: scale(35),
                    borderBottomRightRadius: scale(35),
                    overflow: "hidden",
                }}
            >
                <Pressable
                    className="bg-[#fff] items-center justify-center absolute z-10"
                    style={{
                        width: scale(35),
                        height: scale(35),
                        borderRadius: scale(5),
                        top: verticalScale(32),
                        left: scale(10),
                    }}
                    onPress={() => router.back()}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <Text
                    className="text-center font-psemibold"
                    style={{
                        paddingTop: verticalScale(45),
                        fontSize: fontSizes.FONT28,
                        color: theme.dark ? "#fff" : "#807F7F",
                    }}
                >
                    FAQ's
                </Text>
                <IconFour />
            </LinearGradient>
            <View style={{ padding: scale(20) }}>
                <View>
                    <AntDesign
                        name="search1"
                        size={scale(19)}
                        color={theme.dark ? "#fff" : "#000"}
                        style={{
                            position: "absolute",
                            top: verticalScale(9),
                            left: scale(10),
                        }}
                    />
                    <TextInput
                        style={{
                            height: verticalScale(35),
                            borderWidth: 1,
                            color: theme.dark ? "#D9D9D9" : "#000",
                            borderColor: theme.dark ? "#D9D9D9" : "#000",
                            borderRadius: scale(20),
                            paddingLeft: scale(32),
                            fontSize: fontSizes.FONT20,
                        }}
                        placeholder="Search for Topics!"
                        placeholderTextColor={theme.dark ? "#D9D9D9" : "#000"}
                    />
                </View>
                <View style={{ paddingTop: scale(10) }}>
                    <FlatList
                        data={FAQData}
                        renderItem={({ item }) => (
                            <View
                                key={item.id}
                                style={{
                                    width: scale(310),
                                    backgroundColor: theme.dark ? "#3c43485c" : "#eaf3fb85",
                                    marginVertical: verticalScale(8),
                                    borderRadius: scale(10),
                                    paddingVertical: scale(8),
                                    paddingHorizontal: scale(10),
                                }}
                            >
                                <View
                                    className="flex-row justify-between">
                                    <Text
                                        className="font-pmedium"
                                        style={{
                                            color: theme.dark ? "#fff" : "#000",
                                            fontSize: fontSizes.FONT20,
                                            width: scale(260),
                                        }}
                                    >
                                        {item.question}
                                    </Text>
                                    <View style={{ paddingRight: scale(5) }}>
                                        <Pressable onPress={() => toggleQuestion(item.id)}>
                                            {activeQuestion === item.id ? (
                                                <AntDesign
                                                    name="up"
                                                    size={scale(20)}
                                                    color={theme.dark ? "#fff" : "#000"}
                                                />
                                            ) : (
                                                <AntDesign
                                                    name="down"
                                                    size={scale(20)}
                                                    color={theme.dark ? "#fff" : "#000"}
                                                />
                                            )}
                                        </Pressable>
                                    </View>
                                </View>
                                {activeQuestion === item.id && (
                                    <Text
                                        className="font-pregular"
                                        style={{
                                            color: theme.dark ? "#fff" : "#000",
                                            fontSize: fontSizes.FONT18,
                                            width: scale(260),
                                            paddingTop: verticalScale(5),
                                        }}
                                    >
                                        {item.answer}
                                    </Text>
                                )}
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}