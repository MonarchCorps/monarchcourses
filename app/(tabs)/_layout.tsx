import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { IsAndroid, IsIOS, windowWidth } from "@/themes/App";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                // position: "absolute",
                // bottom: 0,
                // left: 16,
                height: IsAndroid ? 68 : 75,
                backgroundColor: "white",
                borderTopRightRadius: IsIOS ? 19 : 0,
                borderTopLeftRadius: IsIOS ? 19 : 0,
                alignItems: "center",
                justifyContent: "space-around",
                maxWidth: 750,
                marginHorizontal: "auto"
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                color={focused ? "#021940" : "gray"}
                                size={24}
                            />
                            <Text
                                style={{
                                    color: focused ? "#021940" : "gray",
                                    fontSize: 12,
                                    marginTop: 4
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
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "book" : "book-outline"}
                                color={focused ? "#021940" : "gray"}
                                size={24}
                            />
                            <Text
                                style={{
                                    color: focused ? "#021940" : "gray",
                                    fontSize: 12,
                                    marginTop: 4
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
                                height: 60,
                                width: 60,
                                backgroundColor: "#021940",
                                marginBottom: 30
                            }}>
                            <Ionicons
                                name={"add"}
                                color={"white"}
                                size={24}
                            />

                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                color={focused ? "#021940" : "gray"}
                                size={24}
                            />
                            <Text
                                style={{
                                    color: focused ? "#021940" : "gray",
                                    fontSize: 12,
                                    marginTop: 4
                                }}
                            >
                                Profile
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="resources/index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: windowWidth(80)
                        }}>
                            <Ionicons
                                name={focused ? "document-text" : "document-text-outline"}
                                color={focused ? "#021940" : "gray"}
                                size={24}
                            />
                            <Text
                                style={{
                                    color: focused ? "#021940" : "gray",
                                    fontSize: 12,
                                    marginTop: 4
                                }}
                            >
                                Resources
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