import { DarkTheme, LightTheme } from "@/constants"

export type ThemeContextType = {
    theme: typeof LightTheme | typeof DarkTheme,
    toggleTheme: () => Promise<void>
}