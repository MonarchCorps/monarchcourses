import GradientText from "@/components/common/GradientText";
import useTheme from "@/hooks/useTheme";
import { fontSizes, windowWidth } from "@/themes/App";
import SkeletonLoader from "@/utils/SkeletonLoader";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

export default function CoursesScreen() {
    const { theme } = useTheme()
    const bottomTabBarHeight = useBottomTabBarHeight()

    return (
        <SafeAreaView className={`flex-1 ${theme.dark ? "bg-[#131313]" : "bg-[#fff]"}`}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: verticalScale(-30)
                }}
            >
                <StatusBar
                    barStyle={!theme.dark ? "dark-content" : "light-content"}
                />
                <View
                    style={{
                        marginHorizontal: windowWidth(20)
                    }}>
                    <View
                        className="flex-row items-center">
                        <Text
                            className={`font-pmedium ${theme.dark ? "text-[#fff]" : "text-[#000]"}`}
                            style={{
                                fontSize: fontSizes.FONT35
                            }}
                        >
                            Popular{"  "}
                        </Text>
                        <GradientText
                            text="Courses"
                            className="font-psemibold"
                            styles={{
                                fontSize: fontSizes.FONT35
                            }}
                        />
                    </View>
                    <View className="flex-row items-center pt-2">
                        <View className="bg-[#12BB70]" style={{
                            width: scale(15),
                            height: scale(15),
                            borderRadius: 100
                        }} />
                        <Text
                            className={`font-pregular ${theme.dark ? "text-white" : "text-black"}`}
                            style={{
                                fontSize: fontSizes.FONT18,
                                paddingLeft: windowWidth(5)
                            }}
                        >
                            Our Comprehensive Project Base Course
                        </Text>
                    </View>
                </View>
                {
                    true ? (
                        <>
                            <SkeletonLoader />
                            <SkeletonLoader />
                        </>
                    ) : (
                        <></>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    );
}