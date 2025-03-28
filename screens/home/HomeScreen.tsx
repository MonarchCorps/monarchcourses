import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@/hooks/useTheme";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import { ScrollView, Text, View } from "react-native";
import HomeBanner from "@/components/home/HomeBanner";
import { scale, verticalScale } from "react-native-size-matters";
import { fontSizes, windowWidth } from "@/themes/App";
import GradientText from "@/components/common/GradientText";
import SkeletonLoader from "@/utils/SkeletonLoader";

export default function HomeScreen() {
    const { theme } = useTheme()

    return (
        <LinearGradient
            colors={
                theme.dark ? ["#180D41", "#2A2DS32", "#131313"] : ["#fff", "#f7f7f7"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
                flex: 1,
                backgroundColor: theme.dark ? "#101010" : "#fff"
            }}
        >
            <WelcomeHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeBanner />
                <View style={{
                    marginHorizontal: scale(20),
                    marginTop: verticalScale(-25)
                }}>
                    <View className="flex-row items-center" style={{
                        marginTop: verticalScale(5)
                    }}>
                        <Text className={`font-pmedium ${theme.dark ? "text-white" : "text-black"}`} style={{
                            fontSize: fontSizes.FONT35
                        }}>
                            Popular{' '}
                        </Text>
                        <GradientText
                            text="Course"
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
        </LinearGradient>
    )
}