import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

const AuthLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen name='sign-in' options={{ headerShown: false }} />
				<Stack.Screen name='sign-up' options={{ headerShown: false }} />
			</Stack>
			<StatusBar backgroundColor='#161622' style={`${Platform.OS === "ios" ? "dark" : "light"}`} />
		</>
	)
}

export default AuthLayout