import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import { removeAccessToken, removeRefreshToken, removeUserDetails } from "@/helper/token";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import {
    fontSizes,
    IsAndroid,
    IsHaveNotch,
    IsIPAD
} from "@/themes/App";
import {
    Feather,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import {
    moderateScale,
    scale,
    verticalScale
} from "react-native-size-matters";

type PressableContentType = {
    id: number;
    title: string;
    subTitle: string;
    icon: any;
    onPress?: () => void
}

export default function ProfileScreen() {
    const { theme } = useTheme()
    const { auth } = useAuth()

    const handleLogout = async () => {
        await removeUserDetails()
        await removeAccessToken()
        await removeRefreshToken()
    }

    const pressableContent: PressableContentType[] = [
        {
            id: 1,
            title: "Enrolled Courses",
            subTitle: " Explore your all enrolled courses",
            icon: (
                <Feather
                    name="book-open"
                    size={scale(21)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            )
        },
        {
            id: 2,
            title: "Course Leaderboard",
            subTitle: "Let's see your position in Leaderboard",
            icon: (
                <MaterialIcons
                    name="leaderboard"
                    size={scale(23)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />

            )
        },
        {
            id: 3,
            title: "My Tickets",
            subTitle: "Explore your all support tickets",
            icon: (
                <MaterialCommunityIcons
                    name="message-alert-outline"
                    size={scale(22)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            )
        },
        {
            id: 4,
            title: "Support Center",
            subTitle: "Explore our fastest support center",
            icon: (
                <FontAwesome
                    name="support"
                    size={scale(22)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            ),
            onPress() {
                router.push("/(routes)/support-center")
            },
        },
        {
            id: 5,
            title: "Notifications",
            subTitle: "Explore the important notifications",
            icon: (
                <Ionicons
                    name="notifications"
                    size={scale(22)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            ),
            onPress() {
                router.push("/(routes)/notification")
            },
        },
        {
            id: 6,
            title: "Settings",
            subTitle: "Control the app as per your preferences",
            icon: (
                <Ionicons
                    name="settings-sharp"
                    size={scale(23)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            ),
            onPress() {
                router.push("/(routes)/settings")
            },
        },
        {
            id: 7,
            title: "Privacy & Policy",
            subTitle: "Explore our privacy and policy",
            icon: (
                <MaterialIcons
                    name="policy"
                    size={scale(23)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            )
        },
        {
            id: 8,
            title: "Log Out",
            subTitle: "Log out from your account",
            icon: (
                <MaterialIcons
                    name="logout"
                    size={scale(23)}
                    color={theme.dark ? "#fff" : "#0047AB"}
                />
            ),
            onPress() {
                handleLogout()
                router.replace("/(auth)/sign-in")
            },
        }
    ]

    return (
        <View className={`flex-1 ${theme.dark ? "bg-[#101010]" : "bg-[#f5f5f5]"}`}>
            <LinearGradient
                colors={
                    theme.dark ? ["#121121", "#3c43485c", "#121121"]
                        : ["#6248FF", "#8673FC"]
                }
                start={theme.dark ? { x: 1, y: 1 } : { x: 0, y: 1 }}
                end={theme.dark ? { x: 0, y: 1 } : { x: 0, y: 0 }}
                style={styles.header}
            >
                <StatusBar
                    barStyle={IsAndroid ? "dark-content" : "light-content"}
                />
                <SafeAreaView style={styles.container}>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-white font-pmedium" style={{ fontSize: fontSizes.FONT28 }}>Profile</Text>
                        <View>
                            <ThemeSwitcher />
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
            <View
                className={`self-center z-10 ${theme.dark ? "bg-[#121212]" : "bg-[#fff]"}`}
                style={[styles.profileWrapper, {
                    shadowOpacity: theme.dark ? 0.12 : 0.2
                }]}>
                <View className="flex-row">
                    <View
                        className="bg-blue-500 flex items-center justify-center"
                        style={styles.profileImage}
                    >
                        <Text style={{ fontSize: fontSizes.FONT35 }}>D</Text>
                    </View>
                    <View style={styles.profileTextContainer}>
                        <Text className={`font-psemibold ${theme.dark ? "text-[#fff]" : "text-[#000]"}`} style={[styles.profileName]}>
                            {auth?.user?.name || "David"}
                        </Text>
                        <Text className="font-pregular" style={styles.profileTitle}>
                            {auth?.user.email}
                        </Text>
                    </View>
                </View>
                <View className="flex-row justify-around" style={styles.statsContainer}>
                    <LinearGradient
                        style={styles.statBox}
                        colors={["#021940", "#0185F7"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text className="font-pextrabold text-[#fff]" style={styles.statNumber}>{auth?.user?.orders?.length || 20}</Text>
                        <Text className="font-pregular text-[#fff]" style={styles.statLabel}>Enrolled</Text>
                    </LinearGradient>
                    <LinearGradient
                        style={styles.statBox}
                        colors={["#BF6FF8", "#3C1BE9"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text className="font-pextrabold text-[#fff]" style={styles.statNumber}>{5}</Text>
                        <Text className="font-pregular text-[#fff]" style={styles.statLabel}>Certificates</Text>
                    </LinearGradient>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    padding: scale(20),
                }}
            >
                {pressableContent.map((pressable: PressableContentType, index: number) => (
                    <Pressable
                        key={index}
                        className="flex-row items-center"
                        style={{
                            marginBottom:
                                index === pressableContent.length - 1
                                    ? verticalScale(90)
                                    : verticalScale(20)
                        }}
                        onPress={pressable.onPress}

                    >
                        <View
                            className="flex-row items-center justify-center border-1 border-[#E2DDFF]"
                            style={{
                                borderWidth: 1,
                                width: scale(38),
                                height: scale(38),
                                borderRadius: scale(10)
                            }}
                        >
                            {pressable.icon}
                        </View>
                        <View>
                            <Text className={`font-pregular ${theme.dark ? "text-[#fff]" : "text-[#000]"}`} style={{
                                marginLeft: scale(10),
                                fontSize: fontSizes.FONT22,
                            }}>
                                {pressable.title}
                            </Text>
                            <Text
                                className={`font-pregular opacity-60 ${theme.dark ? "text-[#fff]" : "text-[#000]"}`}
                                style={{
                                    marginLeft: scale(10),
                                    fontSize: fontSizes.FONT15,
                                }}
                            >
                                {pressable.subTitle}
                            </Text>
                        </View>
                    </Pressable>
                ))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
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
    container: {
        paddingTop: IsAndroid ?
            verticalScale(20) : 0
    },
    profileWrapper: {
        width: scale(320),
        height: IsAndroid
            ? verticalScale(155)
            : !IsHaveNotch
                ? verticalScale(175)
                : IsIPAD
                    ? verticalScale(185)
                    : verticalScale(155),
        marginTop: verticalScale(-90),
        borderRadius: scale(20),
        padding: scale(15),
        shadowColor: "#999",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profileImage: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
        marginBottom: verticalScale(10),
    },
    profileTextContainer: {
        marginBottom: verticalScale(10),
        marginLeft: scale(10),
    },
    profileName: {
        fontSize: fontSizes.FONT22,
    },
    profileTitle: {
        fontSize: fontSizes.FONT17,
        color: "#8a8a8a",
        width: scale(230),
        overflow: "hidden",
    },
    statsContainer: {
        marginTop: verticalScale(10),
    },
    statBox: {
        width: scale(120),
        height: verticalScale(62),
        borderRadius: scale(10),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    statNumber: {
        fontSize: fontSizes.FONT25,
    },
    statLabel: {
        fontSize: fontSizes.FONT20,
    },
})