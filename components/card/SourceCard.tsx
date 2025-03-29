import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import {
    fontSizes,
    SCREEN_WIDTH,
    windowHeight,
    windowWidth,
} from "@/themes/App";
import useTheme from "@/hooks/useTheme";
import { scale, verticalScale } from "react-native-size-matters";

export default function SourceCodeCard({
    item,
}: {
    item: {
        url: string;
        thumbnail: string;
        title: string;
    };
}) {
    const { theme } = useTheme();

    const handlePress = async () => {
        await WebBrowser.openBrowserAsync(item.url);
    };

    return (
        <Pressable
            style={{
                paddingHorizontal: windowWidth(20),
                paddingVertical: windowHeight(17),
            }}
            onPress={handlePress}
        >
            <View
                style={[
                    styles.card,
                    {
                        backgroundColor: theme.dark ? "#3c43485c" : "#eaf3fb85",
                    },
                ]}
            >
                <Image
                    className="self-center"
                    source={{
                        uri: item?.thumbnail,
                    }}
                    style={{
                        width: SCREEN_WIDTH - 52,
                        height: (SCREEN_WIDTH - 40) * 0.5625,
                        borderRadius: windowWidth(5),
                    }}
                />
                <View
                    style={{
                        paddingHorizontal: scale(15),
                        paddingVertical: verticalScale(5),
                    }}
                >
                    <Text
                        className={`font-pregular ${theme.dark ? "text-[#fff]" : "text-[#3E3B54]"}`}
                        style={{
                            paddingTop: windowHeight(5),
                            fontSize: fontSizes.FONT18,
                        }}
                    >
                        {item.title}
                    </Text>
                    <View
                        className="flex-row justify-between"
                        style={{
                            paddingVertical: windowHeight(5),
                        }}
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: windowWidth(10),
        shadowOpacity: 0.1,
        shadowColor: "#40E0D0",
        shadowRadius: 5,
    },
});