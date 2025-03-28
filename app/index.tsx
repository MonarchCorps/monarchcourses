import useAuth from "@/hooks/useAuth";
import { View } from "react-native";
import TabsComponent from "./(tabs)";
import OnboardComponent from "./(routes)/onboarding";
import { useTokenExpired } from "@/hooks/useTokenExpired";
import { Redirect } from "expo-router";
import { getRefreshToken } from "@/helper/token";

export default function Index() {

	const { loading, auth } = useAuth()
	const { isTokenExpired } = useTokenExpired()
	let refreshToken: string | null = null;

	(async (): Promise<string | null> => {
		return refreshToken = await getRefreshToken();
	})();
	{/* <Redirect href={!auth?.user.id ? "/(routes)/onboarding" : "/(tabs)"} /> */ }

	return (
		!!refreshToken && isTokenExpired ?
			<Redirect href="/sign-in" />
			: loading
				? <View className="size-full bg-black"></View>
				: !auth?.user.id ? (
					<OnboardComponent />
				) : (
					// <TabsComponent />
					<Redirect href="/(tabs)" />
				)
	);
}
