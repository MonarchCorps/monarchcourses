import { ThemeProvider } from "@/context/ThemeContext";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import '../global.css'
import { useEffect } from "react";
import QueryClientConfig from "@/configs/queryClient";
import { RootSiblingParent } from 'react-native-root-siblings';
import { ToastProvider } from "@/context/ToastContext";
import { AuthProvider } from "@/context/AuthContext";
import { TokenExpiredProvider } from "@/context/TokenExpiredContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		"Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) return null;

	return (
		<GluestackUIProvider mode="light">
			<RootSiblingParent>
				<QueryClientConfig>
					<AuthProvider>
						<ToastProvider>
							<ThemeProvider>
								<TokenExpiredProvider>
									<Stack screenOptions={{
										headerShown: false
									}}>
										<Stack.Screen name="index" />
									</Stack>
								</TokenExpiredProvider>
							</ThemeProvider>
						</ToastProvider>
					</AuthProvider>
				</QueryClientConfig>
			</RootSiblingParent>
		</GluestackUIProvider>
	);
}