import {
	createContext,
	useState,
	useEffect
} from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContextType } from "@/types/Theme";
import { DarkTheme, LightTheme } from "@/constants";

const ThemeContext = createContext<ThemeContextType>({
	theme: LightTheme,
	toggleTheme: async () => { },
});

export const ThemeProvider = ({ children }: any) => {
	const systemColorScheme = useColorScheme();
	const [theme, setTheme] = useState(systemColorScheme === "dark" ? DarkTheme : LightTheme);

	useEffect(() => {
		const loadTheme = async () => {
			const savedTheme = await AsyncStorage.getItem("userTheme");
			if (savedTheme) {
				setTheme(savedTheme === "dark" ? DarkTheme : LightTheme);
			} else {
				setTheme(systemColorScheme === "dark" ? DarkTheme : LightTheme);
			}
		};
		loadTheme();
	}, []);

	const toggleTheme = async () => {
		const newTheme = theme === DarkTheme ? LightTheme : DarkTheme;
		setTheme(newTheme);
		await AsyncStorage.setItem("userTheme", newTheme.dark ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext