import { DimensionValue, Dimensions, PixelRatio, Platform } from "react-native";
import * as Device from "expo-device";

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

export const IsIOS = Platform.OS === "ios";
export const IsAndroid = Platform.OS === "android";
export const IsIPAD = IsIOS && SCREEN_HEIGHT / SCREEN_WIDTH < 1.6;

// Notch detection using device model names
const notchDevices = [
    "iPhone X",
    "iPhone XR",
    "iPhone XS",
    "iPhone XS Max",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 13",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 14",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
];

// Check for notch devices (iOS)
export const hasNotch = () => {
    return (
        IsIOS &&
        notchDevices.includes(Device.modelName ?? "")
    );
};

// Simple screen height check for notch (fallback)
export const IsHaveNotch = IsIOS && SCREEN_HEIGHT > 750;

// iPhone 12 Pro Max or newer
export const Isiphone12promax = IsIOS && SCREEN_HEIGHT >= 2778;

// Scale height based on screen size
export const windowHeight = (height: DimensionValue): number => {
    if (!height) return 0;

    const tempHeight = SCREEN_HEIGHT * (parseFloat(height.toString()) / 667);
    return PixelRatio.roundToNearestPixel(tempHeight);
};

// Scale width based on screen size
export const windowWidth = (width: DimensionValue): number => {
    if (!width) return 0;

    const tempWidth = SCREEN_WIDTH * (parseFloat(width.toString()) / 480);
    return PixelRatio.roundToNearestPixel(tempWidth);
};

// Scalable font sizes
export const fontSizes = {
    FONT6: windowWidth(6),
    FONT7: windowWidth(7),
    FONT8: windowWidth(8),
    FONT9: windowWidth(9),
    FONT10: windowWidth(10),
    FONT11: windowWidth(11),
    FONT12: windowWidth(12),
    FONT13: windowWidth(13),
    FONT14: windowWidth(14),
    FONT15: windowWidth(15),
    FONT16: windowWidth(16),
    FONT17: windowWidth(17),
    FONT18: windowWidth(18),
    FONT19: windowWidth(19),
    FONT20: windowWidth(20),
    FONT21: windowWidth(21),
    FONT22: windowWidth(22),
    FONT23: windowWidth(23),
    FONT24: windowWidth(24),
    FONT25: windowWidth(25),
    FONT26: windowWidth(26),
    FONT27: windowWidth(27),
    FONT28: windowWidth(28),
    FONT30: windowWidth(30),
    FONT32: windowWidth(32),
    FONT35: windowWidth(35),
};