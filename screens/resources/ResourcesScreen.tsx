import SourceCodeCard from "@/components/card/SourceCard";
import { videoLessonsData } from "@/constants";
import useTheme from "@/hooks/useTheme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";

export default function ResourcesScreen() {
    const { theme } = useTheme()
    const bottomTabBarHeight = useBottomTabBarHeight()

    return (
        <SafeAreaView
            className={`flex-1 ${theme.dark ? "bg-[#131313]" : "bg-[#fff]"}`}
        >
            <View style={{
                paddingBottom: bottomTabBarHeight - 20,
                marginTop: verticalScale(-40)
            }}>
                <FlatList
                    data={videoLessonsData}
                    renderItem={({ item }) => <SourceCodeCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    style={{
                        paddingTop: verticalScale(10),
                    }}
                />
            </View>
        </SafeAreaView>
    );
}