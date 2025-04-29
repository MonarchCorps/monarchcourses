import useTheme from "@/hooks/useTheme";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    View,
    Text,
    Pressable,
    Modal,
    TextInput,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import SupportBannerOne from "@/assets/svgs/support-center/one";
import SupportBannerTwo from "@/assets/svgs/support-center/two";
import SupportBannerThree from "@/assets/svgs/support-center/three";
import { fontSizes, IsHaveNotch, IsIPAD } from "@/themes/App";
import IconOne from "@/assets/svgs/onboarding/icon-1";
import IconTwo from "@/assets/svgs/onboarding/icon-2";
import IconThree from "@/assets/svgs/onboarding/icon-3";
import { BlurView } from "expo-blur";

type SupportCenterDataType = {
    open: boolean;
    ticketTitle: string;
    ticketDescription: string;
};

type SupportCenterActionsType = {
    title: string;
    subTitle: string;
    icon: React.ReactElement;
    onPress?: () => void;
};

export default function SupportCenterScreen() {
    const { theme } = useTheme();
    const [supportCenterData, setSupportCenterData] =
        useState<SupportCenterDataType>({
            open: false,
            ticketTitle: "",
            ticketDescription: "",
        });

    const supportCenterActions: readonly SupportCenterActionsType[] = [
        {
            title: "Chat",
            subTitle: " Start a conversation now!",
            icon: <IconOne />,
            onPress() {
                setSupportCenterData((prev) => ({ ...prev, open: true }))
            },
        },
        {
            title: "Faq's",
            subTitle: "Find intelligent answers instantly",
            icon: <IconTwo />,
            onPress() {
                router.push("/(routes)/faq")
            },
        },
        {
            title: "Email",
            subTitle: "Get solution directly to inbox",
            icon: <IconThree />,
        },
    ];

    return (
        <ScrollView className={`flex-1 ${theme.dark ? "bg-[#101010]" : "bg-[#fff]"}`}>
            <View
                className="relative overflow-hidden"
                style={{
                    height: verticalScale(300),
                    backgroundColor: theme.dark ? "#8673FC" : "#9DCDFF",
                    paddingTop: verticalScale(45),
                    paddingHorizontal: scale(20),
                }}
            >
                <Pressable
                    className="items-center justify-center"
                    style={{
                        width: scale(35),
                        height: scale(35),
                        backgroundColor: "#fff",
                        borderRadius: scale(5),
                    }}
                    onPress={() => router.back()}
                >
                    <AntDesign name="arrowleft" size={scale(22)} />
                </Pressable>
                <View className="flex-row">
                    <SupportBannerOne />
                    <SupportBannerTwo />
                    <SupportBannerThree />
                </View>
            </View>
            <View style={{ padding: scale(20) }}>
                <Text
                    className="font-psemibold text-center"
                    style={{
                        color: theme.dark ? "#fff" : "#000",
                        fontSize: fontSizes.FONT30,
                    }}
                >
                    Tell us how can we help 👋
                </Text>
                <Text
                    className="font-pregular text-center"
                    style={{
                        color: theme.dark ? "#fff" : "#000",
                        fontSize: fontSizes.FONT17,
                    }}
                >
                    We are always available to provide you with the best services we can
                </Text>

                {supportCenterActions.map(
                    (
                        supportCenterAction: SupportCenterActionsType,
                        index: number
                    ): React.ReactElement => {
                        return (
                            <Pressable
                                key={index}
                                style={{
                                    height: !IsHaveNotch
                                        ? verticalScale(65)
                                        : IsIPAD
                                            ? verticalScale(80)
                                            : verticalScale(62),
                                    backgroundColor: theme.dark ? "#3C43485C" : "#eaf3fb85",
                                    borderRadius: scale(10),
                                    shadowOpacity: 0.1,
                                    shadowColor: "#40E0D0",
                                    shadowRadius: 5,
                                    padding: scale(10),
                                    marginTop: verticalScale(20),
                                    flexDirection: "row",
                                    gap: scale(10),
                                }}
                                onPress={supportCenterAction.onPress}
                            >
                                {supportCenterAction.icon}
                                <View>
                                    <Text
                                        className="font-pmedium"
                                        style={{
                                            color: !theme.dark ? "#000" : "#fff",
                                            fontSize: fontSizes.FONT22,
                                        }}
                                    >
                                        {supportCenterAction.title}
                                    </Text>
                                    <Text
                                        className="font-pregular"
                                        style={{
                                            color: !theme.dark ? "#000" : "#fff",
                                            fontSize: fontSizes.FONT19,
                                            paddingTop: verticalScale(1),
                                        }}
                                    >
                                        {supportCenterAction.subTitle}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    }
                )}
            </View>

            {supportCenterData.open && (
                <Modal
                    animationType="fade"
                    transparent
                    visible={supportCenterData.open}
                    onRequestClose={() =>
                        setSupportCenterData((prev) => ({ ...prev, open: false }))
                    }
                >
                    <Pressable
                        className="flex-1"
                        onPress={() =>
                            setSupportCenterData((prev) => ({ ...prev, open: false }))
                        }
                    >
                        <BlurView
                            className="flex-1 items-center justify-center"
                            intensity={90}
                        >
                            <Pressable
                                style={{
                                    width: scale(300),
                                    marginHorizontal: scale(50),
                                    backgroundColor: theme.dark ? "#101010" : "",
                                    borderRadius: scale(10),
                                    padding: scale(15),
                                }}
                                onPress={(e): void => e.stopPropagation()}
                            >
                                <Text
                                    className="text-center font-psemibold"
                                    style={{
                                        fontSize: fontSizes.FONT35,
                                        color: theme.dark ? "#fff" : "#000",
                                    }}
                                >
                                    Create Ticket
                                </Text>
                                <View>
                                    <Text className="font-pmedium"
                                        style={{
                                            fontSize: fontSizes.FONT20,
                                            color: theme.dark ? "#fff" : "#000",
                                            paddingTop: verticalScale(5)
                                        }}>
                                        Ticket Title
                                    </Text>
                                    <TextInput
                                        placeholder="What's your issue?"
                                        style={{
                                            height: verticalScale(30),
                                            borderWidth: 1,
                                            borderColor: theme.dark ? "#fff" : "#000",
                                            marginVertical: verticalScale(5),
                                            color: theme.dark ? "#fff" : "#000",
                                            paddingLeft: scale(10),
                                            fontSize: fontSizes.FONT18,
                                            borderRadius: scale(5)
                                        }}
                                        value={supportCenterData.ticketTitle}
                                        onChangeText={(e) => setSupportCenterData((prev) => ({
                                            ...prev,
                                            ticketTitle: e
                                        }))}
                                        placeholderTextColor={theme.dark ? "#fff" : "#000"}
                                    />
                                </View>

                                <View>
                                    <Text className="font-pmedium"
                                        style={{
                                            fontSize: fontSizes.FONT20,
                                            color: theme.dark ? "#fff" : "#000",
                                            paddingTop: verticalScale(5)
                                        }}>
                                        Ticket Description
                                    </Text>
                                    <TextInput
                                        placeholder="Describe your issue?"
                                        multiline
                                        numberOfLines={6}
                                        style={{
                                            height: verticalScale(80),
                                            borderWidth: 1,
                                            borderColor: theme.dark ? "#fff" : "#000",
                                            marginVertical: verticalScale(5),
                                            color: theme.dark ? "#fff" : "#000",
                                            paddingLeft: scale(10),
                                            paddingTop: verticalScale(5),
                                            fontSize: fontSizes.FONT18,
                                            borderRadius: scale(5),
                                            textAlignVertical: "top"
                                        }}
                                        value={supportCenterData.ticketDescription}
                                        onChangeText={(e) => setSupportCenterData((prev) => ({
                                            ...prev,
                                            ticketDescription: e
                                        }))}
                                        placeholderTextColor={theme.dark ? "#fff" : "#000"}
                                    />
                                </View>

                                <Pressable
                                    className="bg-[#2467]"
                                    style={{
                                        paddingVertical: verticalScale(8),
                                        borderRadius: scale(8),
                                        marginTop: verticalScale(15)
                                    }}>
                                    {false ? (
                                        <ActivityIndicator size={"large"} />
                                    ) : (
                                        <Text className="text-center text-[#fff] font-psemibold" style={{ fontSize: fontSizes.FONT22 }}>
                                            Create
                                        </Text>
                                    )}
                                </Pressable>
                            </Pressable>
                        </BlurView>
                    </Pressable>
                </Modal>
            )}
        </ScrollView>
    );
}
