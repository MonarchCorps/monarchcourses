import useAuth from "@/hooks/useAuth";
import { View } from "react-native";
import { useTokenExpired } from "@/hooks/useTokenExpired";
import { Redirect } from "expo-router";
import { getRefreshToken } from "@/helper/token";

export default function Index() {

	const { loading } = useAuth()
	const { isTokenExpired } = useTokenExpired()
	let refreshToken: string | null = null;

	(async (): Promise<string | null> => {
		return refreshToken = await getRefreshToken();
	})();

	return (
		loading
			? <View className="flex-1 size-full bg-black" />
			: !!refreshToken || isTokenExpired // if there is no token or it is expired 
				? <Redirect href="/(routes)/onboarding" />
				: <Redirect href="/(tabs)" />

	);
}
