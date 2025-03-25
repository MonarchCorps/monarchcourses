import useAuth from "@/hooks/useAuth";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

	const { loading, auth } = useAuth()

	return (
		loading
			? <View></View>
			: <Redirect href={!auth?.user.id ? "/(routes)/onboarding" : "/(tabs)"} />
	);
}
