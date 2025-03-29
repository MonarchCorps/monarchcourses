import Header from '@/components/common/Header'
import { NotificationsData } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { fontSizes } from '@/themes/App'
import { MaterialIcons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'
import { useState } from 'react'
import {
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale } from 'react-native-size-matters'

type FilterButtonType = {
    readonly text: "All" | "Courses" | "Messages" | "Resources" | "Report Center";
}

export default function NotificationScreen() {
    const { theme } = useTheme()
    const [active, setActive] = useState<string>("All")

    const filterButtons: FilterButtonType[] = [
        { text: "All" },
        { text: "Courses" },
        { text: "Messages" },
        { text: "Resources" },
        { text: "Report Center" },
    ]

    const renderItem = ({ item }): React.ReactElement => {
        return (
            <Swipeable
                renderRightActions={() => (
                    <Pressable className='bg-red-700 justify-center items-center h-full' style={styles.deleteButton}>
                        <MaterialIcons
                            name='delete-outline'
                            size={scale(25)}
                            color={"#fff"}
                        />
                    </Pressable>
                )}
            >
                <Pressable
                    className={`flex-row items-center
                        ${item.status === "Unread"
                            ?
                            theme.dark
                                ? "bg-[#3c43485c]"
                                : "bg-[#f1f1f1]"
                            : theme.dark
                                ? "bg-[#101010]"
                                : "bg-[#fff]"
                        }
                        `}
                    style={[styles.notificationItem]}
                >
                    <View
                        className="bg-blue-500 flex items-center justify-center"
                        style={{
                            width: scale(50),
                            height: scale(50),
                            borderRadius: scale(100),
                            marginRight: verticalScale(8)
                        }}
                    >
                        <Text style={{ fontSize: fontSizes.FONT35 }}>D</Text>
                    </View>
                    <View style={{
                        width: scale(265)
                    }}>
                        <Text
                            className='flex-1 text-[#333] font-psemibold'
                            style={[styles.notificationText, {
                                fontWeight: "500",
                                fontSize: fontSizes.FONT18,
                                color: theme.dark ? "#fff" : "#000"
                            }]}
                        >
                            {item.title}
                        </Text>
                        <Text
                            style={[styles.notificationText, {
                                fontWeight: "500",
                                fontSize: fontSizes.FONT18,
                                color: theme.dark ? "#fff" : "#333",
                            }]}
                        >
                            {item.message}
                        </Text>
                        <Text
                            style={[
                                styles.notificationText,
                                {
                                    opacity: 0.8,
                                    color: theme.dark ? "#fff" : "#333",
                                },
                            ]}
                        >
                            1 week ago
                        </Text>
                    </View>
                </Pressable>
            </Swipeable>
        )
    }

    return (
        <SafeAreaView
            className={`flex-1 ${theme.dark ? "bg-[#101010]" : "bg-[#fff]"}`}
            edges={["top"]}
        >
            <Header title='Notifications' />
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: theme.dark ? "#101010" : "#fff",
                    },
                ]}
            >
                {
                    false ? (
                        <View
                            style={{
                                padding: scale(16)
                            }}
                        >
                            {Array.from({ length: 7 }).map((_: any, index: number): React.ReactElement => (
                                <MotiView
                                    key={index}
                                    transition={{
                                        type: "timing"
                                    }}
                                    className='flex-row'
                                    style={{
                                        gap: scale(15),
                                        marginBottom: verticalScale(15)
                                    }}
                                    animate={{
                                        backgroundColor: theme.dark ? "#101010" : "#fff"
                                    }}
                                >
                                    <Skeleton
                                        colorMode={theme.dark ? "dark" : "light"}
                                        radius={"round"}
                                        height={scale(60)}
                                        width={scale(60)}
                                    />
                                    <Skeleton
                                        colorMode={theme.dark ? "dark" : "light"}
                                        height={scale(50)}
                                        width={scale(240)}
                                    />
                                </MotiView>
                            ))}
                        </View>
                    ) : (
                        <>
                            <View>
                                <ScrollView
                                    horizontal
                                    style={{ padding: scale(10) }}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {filterButtons.map((filterButton: FilterButtonType, index: number): React.ReactElement => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                padding: verticalScale(9),
                                                backgroundColor:
                                                    active === `${filterButton.text}`
                                                        ? "#705DF2"
                                                        :
                                                        theme.dark
                                                            ?
                                                            "#3C43485C"
                                                            : "#f5f5f5",
                                                borderRadius: scale(5),
                                                marginRight: scale(20),
                                            }}
                                            onPress={() => setActive(`${filterButton.text}`)}
                                        >
                                            <Text
                                                className='font-pmedium text-[#fff]'
                                                style={{ fontSize: fontSizes.FONT18 }}
                                            >
                                                {filterButton.text}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>

                            <FlatList
                                data={NotificationsData}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </>
                    )
                }
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: verticalScale(2),
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginTop: verticalScale(8),
        marginBottom: 5,
    },
    notificationItem: {
        padding: scale(14),
        paddingVertical: verticalScale(10)
    },
    notificationIcon: {
        width: scale(30),
        height: scale(30),
        borderRadius: 20,
        backgroundColor: "#FFCA28",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    notificationInitial: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    notificationText: {
        fontSize: fontSizes.FONT17,
    },
    deleteButton: {
        width: scale(50),
    },
    deleteButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});