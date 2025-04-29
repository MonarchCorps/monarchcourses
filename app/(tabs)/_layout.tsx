import { View, Text, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { fontSizes, IsAndroid, IsIOS, IsIPAD, windowWidth } from "@/themes/App";
import useTheme from "@/hooks/useTheme";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { BlurView } from "expo-blur"

export default function TabsLayout() {
    const { theme } = useTheme()

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                borderTopLeftRadius: IsAndroid ? 0 : IsIPAD ? scale(15) : scale(10),
                borderTopRightRadius: IsAndroid
                    ? 0
                    : IsIPAD
                        ? scale(20)
                        : scale(10),
                borderTopWidth: 0,
                height: verticalScale(55),
                opacity: 1,
            },
            tabBarActiveTintColor: theme.dark ? "#fff" : "#021940",
            tabBarInactiveTintColor: theme.dark ? "#fff" : "#8e8e93",
            tabBarBackground: () => {
                return (
                    <>
                        {IsIOS && !theme.dark ? (
                            <View
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    backgroundColor: "#fff",
                                    borderTopLeftRadius: IsAndroid
                                        ? 0
                                        : IsIPAD
                                            ? scale(25)
                                            : scale(35),
                                    borderTopRightRadius: IsAndroid
                                        ? 0
                                        : IsIPAD
                                            ? scale(25)
                                            : scale(35),
                                    overflow: "hidden",
                                }}
                            />
                        ) : (
                            <BlurView
                                intensity={theme.dark ? (IsAndroid ? 10 : 60) : 100}
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    borderTopLeftRadius: IsAndroid
                                        ? 0
                                        : IsIPAD
                                            ? scale(25)
                                            : scale(35),
                                    borderTopRightRadius: IsAndroid
                                        ? 0
                                        : IsIPAD
                                            ? scale(25)
                                            : scale(35),
                                    overflow: "hidden",
                                    backgroundColor: IsAndroid
                                        ? theme.dark
                                            ? "#131313"
                                            : "#fff"
                                        : theme.dark
                                            ? "transparent"
                                            : "#fff",
                                }}
                            />
                        )}
                    </>
                );
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                color={color}
                                size={moderateScale(20)}
                            />
                            <Text
                                style={{
                                    color: color,
                                    fontSize: moderateScale(12),
                                    marginTop: 4,
                                    fontWeight: focused ? "bold" : "medium"
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="courses/index"
                options={{
                    headerShown: true,
                    headerTitle: "Courses",
                    headerTitleStyle: {
                        color: theme.dark ? "#fff" : "#000",
                        textAlign: "center",
                        width: "auto",
                        fontSize: fontSizes.FONT22,
                        fontFamily: "Poppins-Regular",
                    },
                    headerBackgroundContainerStyle: {
                        backgroundColor: theme.dark ? "#131313" : "#fff",
                        shadowColor: theme.dark ? "#fff" : "#000",
                        shadowOpacity: theme.dark ? 0.1 : 0.1,
                        shadowOffset: { width: 0, height: 1 },
                        shadowRadius: 1,
                        elevation: 1,
                    },
                    headerBackground: () => (
                        <BlurView
                            intensity={theme.dark ? 70 : 80}
                            style={{
                                borderTopLeftRadius: scale(20),
                                borderTopRightRadius: scale(20),
                                overflow: "hidden",
                                backgroundColor: "transparent",
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "book" : "book-outline"}
                                color={color}
                                size={moderateScale(20)}
                            />
                            <Text
                                style={{
                                    color: color,
                                    fontSize: moderateScale(12),
                                    marginTop: 4,
                                    fontWeight: focused ? "bold" : "medium"
                                }}
                            >
                                Courses
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="create/index"
                options={{
                    tabBarIcon: () => (
                        <View className="items-center justify-center rounded-full"
                            style={{
                                height: moderateScale(60),
                                width: moderateScale(60),
                                backgroundColor: theme.dark ? "#fff" : "#021940",
                                marginBottom: 30
                            }}>
                            <Ionicons
                                name={"add"}
                                color={theme.dark ? "#021940" : "#fff"}
                                size={moderateScale(20)}
                            />

                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="resources/index"
                options={{
                    headerShown: true,
                    headerTitle: "Video Lessons",
                    headerTitleStyle: {
                        color: theme.dark ? "#fff" : "#000",
                        textAlign: "center",
                        width: "auto",
                        fontSize: fontSizes.FONT22,
                        fontFamily: "Poppins-Regular",
                    },
                    headerBackgroundContainerStyle: {
                        backgroundColor: theme.dark ? "#131313" : "#fff",
                        shadowColor: theme.dark ? "#fff" : "#000",
                        shadowOpacity: theme.dark ? 0.1 : 0.1,
                        shadowOffset: { width: 0, height: 1 },
                        shadowRadius: 1,
                        elevation: 1,
                    },
                    headerBackground: () => (
                        <BlurView
                            intensity={theme.dark ? 70 : 80}
                            style={{
                                borderTopLeftRadius: scale(20),
                                borderTopRightRadius: scale(20),
                                overflow: "hidden",
                                backgroundColor: "transparent",
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "document-text" : "document-text-outline"}
                                color={color}
                                size={moderateScale(20)}
                            />
                            <Text
                                style={{
                                    color: color,
                                    fontSize: moderateScale(12),
                                    marginTop: 4,
                                    fontWeight: focused ? "bold" : "medium"
                                }}
                            >
                                Resources
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                color={color}
                                size={moderateScale(20)}
                            />
                            <Text
                                style={{
                                    color: color,
                                    fontSize: moderateScale(12),
                                    marginTop: 4,
                                    fontWeight: focused ? "bold" : "medium"
                                }}
                            >
                                Profile
                            </Text>
                        </View>
                    )
                }}
            />
        </Tabs>
    );
}

// <Tabs
// screenOptions={({ route }) => {
//     return {
//         tabBarIcon: ({ color }) => {
//             let iconName;
//             if (route.name === "index") {
//                 iconName = (
//                     <Feather
//                         name="home"
//                         size={moderateScale(24)}
//                         style={{ width: IsIPAD ? scale(20) : "auto" }}
//                         color={color}
//                     />
//                 );
//             } else if (route.name === "courses/index") {
//                 iconName = (
//                     <Feather
//                         name="book-open"
//                         size={moderateScale(24)}
//                         style={{ width: IsIPAD ? scale(20) : "auto" }}
//                         color={color}
//                     />
//                 );
//             } else if (route.name === "resources/index") {
//                 iconName = (
//                     <Ionicons
//                         name="document-text-outline"
//                         size={moderateScale(24)}
//                         style={{ width: IsIPAD ? scale(20) : "auto" }}
//                         color={color}
//                     />
//                 );
//             } else if (route.name === "profile/index") {
//                 iconName = (
//                     <Octicons
//                         name="person"
//                         size={moderateScale(26)}
//                         style={{ width: IsIPAD ? scale(20) : "auto" }}
//                         color={color}
//                     />
//                 );
//             }
//             return iconName;
//         },
//         tabBarActiveTintColor: theme.dark ? "#19C964" : "#4A90E2",
//         tabBarInactiveTintColor: theme.dark ? "#fff" : "#8e8e93",
//         headerShown:
//             route.name === "courses/index" || route.name === "resources/index"
//                 ? true
//                 : false,
//         headerTitle:
//             route.name === "courses/index"
//                 ? "Courses"
//                 : route.name === "resources/index"
//                     ? "Video Lessons"
//                     : "",
//         headerTitleStyle: {
//             color: theme.dark ? "#fff" : "#000",
//             textAlign: "center",
//             width: "auto",
//             fontSize: fontSizes.FONT22,
//             fontFamily: "Poppins-Regular",
//         },
//         headerBackgroundContainerStyle: {
//             backgroundColor: theme.dark ? "#131313" : "#fff",
//             shadowColor: theme.dark ? "#fff" : "#000",
//             shadowOpacity: theme.dark ? 0.1 : 0.1,
//             shadowOffset: { width: 0, height: 1 },
//             shadowRadius: 1,
//             elevation: 1,
//         },
//         headerBackground: () => (
//             <BlurView
//                 intensity={theme.dark ? 70 : 80}
//                 style={{
//                     borderTopLeftRadius: scale(20),
//                     borderTopRightRadius: scale(20),
//                     overflow: "hidden",
//                     backgroundColor: "transparent",
//                 }}
//             />
//         ),
//         tabBarShowLabel: false,
//         tabBarStyle: {
//             position: IsIOS ? (theme.dark ? "absolute" : "static") : "absolute",
//             borderTopLeftRadius: IsAndroid ? 0 : IsIPAD ? scale(20) : scale(35),
//             borderTopRightRadius: IsAndroid
//                 ? 0
//                 : IsIPAD
//                     ? scale(20)
//                     : scale(35),
//             borderTopWidth: 0,
//             height: verticalScale(55),
//             opacity: loading ? 0 : 1,
//             transition: "opacity 0.3s ease-in-out",
//         },
//         tabBarBackground: () => {
//             return (
//                 <>
//                     {IsIOS && !theme.dark ? (
//                         <View
//                             style={{
//                                 ...StyleSheet.absoluteFillObject,
//                                 backgroundColor: "#fff",
//                                 borderTopLeftRadius: IsAndroid
//                                     ? 0
//                                     : IsIPAD
//                                         ? scale(25)
//                                         : scale(35),
//                                 borderTopRightRadius: IsAndroid
//                                     ? 0
//                                     : IsIPAD
//                                         ? scale(25)
//                                         : scale(35),
//                                 overflow: "hidden",
//                             }}
//                         />
//                     ) : (
//                         <BlurView
//                             intensity={theme.dark ? (IsAndroid ? 10 : 60) : 100}
//                             style={{
//                                 ...StyleSheet.absoluteFillObject,
//                                 borderTopLeftRadius: IsAndroid
//                                     ? 0
//                                     : IsIPAD
//                                         ? scale(25)
//                                         : scale(35),
//                                 borderTopRightRadius: IsAndroid
//                                     ? 0
//                                     : IsIPAD
//                                         ? scale(25)
//                                         : scale(35),
//                                 overflow: "hidden",
//                                 backgroundColor: IsAndroid
//                                     ? theme.dark
//                                         ? "#131313"
//                                         : "#fff"
//                                     : theme.dark
//                                         ? "transparent"
//                                         : "#fff",
//                             }}
//                         />
//                     )}
//                 </>
//             );
//         },
//     };
// }}
// >
// <Tabs.Screen name="index" />
// <Tabs.Screen name="courses/index" />
// <Tabs.Screen name="resources/index" />
// <Tabs.Screen name="profile/index" />
// </Tabs>