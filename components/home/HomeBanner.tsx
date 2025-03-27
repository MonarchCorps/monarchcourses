import { View, StyleSheet, Pressable, Image } from 'react-native'
import Swiper from "react-native-swiper"
import * as WebBrowser from "expo-web-browser"
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { IsIPAD } from '@/themes/App'
import { bannerData } from '@/constants'
import { Banner } from '@/types/Banner'

export default function HomeBanner() {

    const handlePress = async (item: string) => {
        await WebBrowser.openBrowserAsync(item)
    }

    return (
        <View
            style={[styles.container]}
        >
            <Swiper
                dotStyle={[styles.similarDotStyles, {
                    backgroundColor: "#C6C7CC"
                }]}
                activeDotStyle={[styles.similarDotStyles, {
                    backgroundColor: "#2467EC"
                }]}
                autoplay
                autoplayTimeout={5}
                style={[styles.swiper]}
            >
                {bannerData.map((item: Banner, index: number) => (
                    <Pressable
                        key={index}
                        style={styles.slide}
                        onPress={() => handlePress(item.url)}
                    >
                        <Image
                            source={{ uri: item.image }}
                            alt=''
                            style={[styles.bannerItemImage]}
                        />
                    </Pressable>
                ))}
            </Swiper>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: verticalScale(14),
        paddingHorizontal: scale(7)
    },
    swiper: {
        height: IsIPAD ?
            moderateScale(240)
            : moderateScale(230)
    },
    similarDotStyles: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(5),
        marginHorizontal: scale(3)
    },
    slide: {
        flex: 1,
        marginHorizontal: scale(10)
    },
    bannerItemImage: {
        height: IsIPAD ?
            moderateScale(200)
            : moderateScale(185),
        objectFit: "cover",
        borderRadius: scale(5)
    }
})