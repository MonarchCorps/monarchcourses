import { getAccessToken } from "@/helper/token";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {

	const [loggedInUser, setLoggedInUser] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		(async () => { // used a self invoking function since getAccessToken returns a promise
			const accessToken = await getAccessToken()
			setLoggedInUser(accessToken ? true : false)
		})()
	}), []

	return (
		loading
			? <Text>Hey</Text>
			: <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
	);
}
