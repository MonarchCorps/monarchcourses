import useTheme from '@/hooks/useTheme'
import { fontSizes } from '@/themes/App';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Pressable, ScrollView, Switch, Appearance } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';

type SettingsNameType =
    | "courseUpdates"
    | "supportTicketResponse"
    | "latestUpdates"

type SettingsDataType = {
    courseUpdates: string;
    supportTicketResponse: string;
    latestUpdates: string;
}

type SettingsNotificationsType = {
    text: string,
    name: SettingsNameType
}

export default function SettingsScreen() {
    const { theme, toggleTheme } = useTheme()
    const [settingsData, setSettingsData] = useState<SettingsDataType>({
        courseUpdates: "",
        supportTicketResponse: "",
        latestUpdates: "",
    })

    useEffect(() => {
        const checkForPreferences = async (): Promise<void> => {
            const courseUpdates = await AsyncStorage.getItem("course_platform_course_updates")
            const supportTicketResponse = await AsyncStorage.getItem("course_platform_support_ticket_response")
            const latestUpdates = await AsyncStorage.getItem("course_platform_latest_updates");

            if (courseUpdates || supportTicketResponse || latestUpdates) {
                setSettingsData((prev) => ({
                    ...prev,
                    courseUpdates: courseUpdates === "true" ? "true" : "false", // used string because expo secure store doesn't allow booleans
                    supportTicketResponse: supportTicketResponse === "true" ? "true" : "false",
                    latestUpdates: latestUpdates === " true" ? "true" : "false",
                }))
            } else {
                await AsyncStorage.setItem("course_platform_course_updates", "true")
                await AsyncStorage.setItem("course_platform_support_ticket_response", "true")
                await AsyncStorage.setItem("course_platform_latest_updates", "true")

                setSettingsData((prev) => ({
                    ...prev,
                    courseUpdates: "true",
                    supportTicketResponse: "true",
                    latestUpdates: "true"
                }));
            };
        }

        checkForPreferences()
    }, [])

    const handleUpdatePreferences = async (
        name: SettingsNameType,
        value: "true" | "false"
    ): Promise<void> => {
        setSettingsData((prev) => ({
            ...prev,
            [name]: value
        }))
        if (name === "courseUpdates") {
            await AsyncStorage.setItem("course_platform_course_updates", value)
        } else if (name === "supportTicketResponse") {
            await AsyncStorage.setItem("course_platform_support_ticket_response", value)
        } else if (name === "latestUpdates") {
            await AsyncStorage.setItem("course_platform_latest_updates", value)
        }

    }

    const settingsNotifications: readonly SettingsNotificationsType[] = [
        { text: "Course Updates", name: "courseUpdates" },
        { text: "Support Ticket Response", name: "supportTicketResponse" },
        { text: "Latest Updates", name: "latestUpdates" },
    ]

    return (
        <SafeAreaView
            edges={["top"]}
            style={{
                flex: 1,
                backgroundColor: theme.dark ? "#101010" : "#fff"
            }}
        >
            <StatusBar barStyle={!theme.dark ? "dark-content" : "light-content"} />
            <View
                className='flex-row items-center'
                style={{
                    height: verticalScale(25),
                    backgroundColor: theme.dark ? "#131313" : "#fff",
                    paddingHorizontal: scale(10),
                    paddingBottom: verticalScale(5),
                    shadowColor: theme.dark ? "#fff" : "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 1 },
                    shadowRadius: 1,
                    elevation: 5
                }}
            >
                <Pressable
                    onPress={() => router.back()}
                    className='flex-row items-center'
                    style={{
                        gap: scale(5)
                    }}
                >
                    <AntDesign
                        name='left'
                        size={scale(22)}
                        color={theme.dark ? "#fff" : "#000"}
                    />
                    <Text
                        className={`${theme.dark ? "text-[#fff]" : "text-[#000]"}`}
                        style={{
                            fontSize: fontSizes.FONT20
                        }}
                    >
                        Back
                    </Text>
                </Pressable>
                <Text
                    className={`text-center ${theme.dark ? "text-[#fff]" : "text-[#000]"}`}
                    style={{
                        width: scale(220),
                        fontSize: fontSizes.FONT22
                    }}
                >
                    Settings
                </Text>
            </View>

            <ScrollView
                style={{ padding: scale(20) }}
            >
                <Text
                    className='font-psemibold'
                    style={[styles.sectionHeader, {
                        color: theme.dark ? "#fff" : "#000"
                    }]}
                >
                    Push Notifications
                </Text>

                {settingsNotifications.map((settingNotification: SettingsNotificationsType, index: number): React.ReactElement => {
                    return (
                        <View
                            key={index}
                            className='flex-row items-center justify-between'
                            style={styles.settingItem}>
                            <Text className='font-pmedium opacity-90'
                                style={[styles.normalText, { color: theme.dark ? "#fff" : "#000" }]}>
                                {settingNotification.text}
                            </Text>
                            <Switch
                                value={settingsData[settingNotification.name] === "true" ? true : false}
                                onValueChange={
                                    (e) =>
                                        handleUpdatePreferences(
                                            settingNotification.name,
                                            String(e) as "true" | "false"
                                        )
                                }
                            />
                        </View>
                    )
                })}

                <View style={styles.settingSection}>
                    <Text
                        className='font-psemibold'
                        style={[styles.sectionHeader, {
                            color: theme.dark ? "#fff" : "#000"
                        }]}
                    >
                        Appearance
                    </Text>
                    <View className='flex-row items-center justify-between'
                        style={styles.settingItem}>
                        <Text className='font-pmedium opacity-90'
                            style={[styles.normalText, { color: theme.dark ? "#fff" : "#000" }]}>
                            App Theme
                        </Text>

                        <Switch value={theme.dark} onValueChange={toggleTheme} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    settingSection: {
        marginBottom: verticalScale(30)
    },
    sectionHeader: {
        fontSize: fontSizes.FONT23,
        marginBottom: verticalScale(10),
    },
    settingItem: {
        marginBottom: verticalScale(15),
    },
    normalText: {
        fontSize: fontSizes.FONT19,
        opacity: 0.9,
    }
})
