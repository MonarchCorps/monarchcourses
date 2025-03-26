import useAuth from "@/hooks/useAuth";
import { View } from "react-native";
import TabsComponent from "./(tabs)";
import OnboardComponent from "./(routes)/onboarding";
import { useTokenExpired } from "@/hooks/useTokenExpired";
import { Redirect } from "expo-router";

export default function Index() {

	const { loading, auth } = useAuth()
	const { isTokenExpired } = useTokenExpired()
	{/* <Redirect href={!auth?.user.id ? "/(routes)/onboarding" : "/(tabs)"} /> */ }

	return (
		isTokenExpired ?
			<Redirect href="/sign-in" />
			: loading
				? <View className="size-full bg-black"></View>
				: !auth?.user.id ? (
					<OnboardComponent />
				) : (
					<TabsComponent />
				)
	);
}
