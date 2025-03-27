import React from "react";
import { View, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { scale } from "react-native-size-matters";
import useTheme from "@/hooks/useTheme";
import { windowHeight, windowWidth } from "@/themes/App";

export default function SkeletonLoader() {
    let { theme } = useTheme();

    return (
        <MotiView
            transition={{
                type: "timing",
            }}
            style={[styles.container, styles.padded]}
            animate={{ backgroundColor: theme.dark ? 'transparent' : "#fff" }}
        >
            <Skeleton
                width={windowWidth(440)}
                height={windowHeight(160)}
                colorMode={theme.dark ? "dark" : "light"}
            />
            <Spacer />
            <View style={{ flexDirection: "row", gap: windowWidth(15) }}>
                <Skeleton
                    colorMode={theme.dark ? "dark" : "light"}
                    radius="round"
                    height={windowWidth(80)}
                    width={windowWidth(80)}
                />
                <View>
                    <Skeleton
                        width={windowWidth(338)}
                        height={windowHeight(20)}
                        colorMode={theme.dark ? "dark" : "light"}
                    />
                    <Spacer />
                    <Skeleton
                        width={windowWidth(338)}
                        height={windowHeight(20)}
                        colorMode={theme.dark ? "dark" : "light"}
                    />
                    <Spacer />
                </View>
            </View>
        </MotiView>
    );
}

export const Spacer = ({ height = 16 }) => <View style={{ height }} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    padded: {
        padding: scale(14),
    },
});