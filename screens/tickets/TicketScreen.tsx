import IconSix from "@/assets/svgs/support-center/six";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { fontSizes } from "@/themes/App";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "moti";
import { Pressable, ScrollView, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function TicketScreen() {
    const { theme } = useTheme();
    const { auth } = useAuth()

    return (
        <View className="flex-1" style={{ backgroundColor: theme.dark ? "#101010" : "#fff" }}>
            <View
                className="relative overflow-hidden"
                style={{
                    height: verticalScale(240),
                    backgroundColor: theme.dark ? "#8673FC" : "#9DCDFF",
                    paddingTop: verticalScale(45),
                    paddingHorizontal: scale(20),
                }}
            >
                <Pressable
                    className="bg-[#fff] items-center justify-center"
                    style={{
                        width: scale(35),
                        height: scale(35),
                        borderRadius: scale(5),
                    }}
                    onPress={() => router.back()}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <Text
                    className="text-center font-psemibold absolute text-[#fff]"
                    style={{
                        fontSize: fontSizes.FONT28,
                        top: verticalScale(50),
                        left: scale(120),
                    }}
                >
                    My Tickets
                </Text>
                <View className="flex-row" >
                    <IconSix />
                </View>
            </View>

            <ScrollView style={{ padding: scale(15) }}>
                <Pressable
                    className="flex-row items-center justify-between"
                    style={{
                        backgroundColor: theme.dark ? "#3c43485c" : "#eaf3fb85",
                        borderRadius: scale(10),
                        shadowOpacity: 0.1,
                        shadowColor: "#40E0D0",
                        shadowRadius: 5,
                        padding: scale(10),
                        marginTop: verticalScale(20),
                    }}
                >
                    <Text
                        className="font-pmedium text-center"
                        style={{
                            color: !theme.dark ? "#000" : "#fff",
                            fontSize: fontSizes.FONT22,
                        }}
                    >
                        Payment method is not working
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}
