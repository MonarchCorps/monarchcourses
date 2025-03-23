import { HEIGHT, WIDTH } from '@/constants'
import { fontSizes, SCREEN_WIDTH, windowHeight, windowWidth } from '@/themes/App'
import { SlideProps } from '@/types/Slider'
import { View, Text } from 'react-native'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

function Slide({ slide }: SlideProps) {
    return (
        <>
            <Svg className={`absolute inset-0`}>
                <Defs>
                    <RadialGradient id='gradient' cx="50%" cy="35%">
                        <Stop offset="0%" stopColor={slide.color} />
                        <Stop offset="100%" stopColor={slide.color} />
                    </RadialGradient>
                </Defs>
                <Rect x={0} y={0} width={WIDTH} height={HEIGHT} fill={"url(#gradient)"} />
            </Svg>

            <View className="absolute inset-0 items-center"
                style={{
                    paddingTop: windowHeight(115),
                }}
            >
                <View>{slide.image}</View>
                <View>
                    <View style={{
                        width: SCREEN_WIDTH * 1,
                        paddingHorizontal: windowWidth(30),
                        paddingTop: windowHeight(14)
                    }}>
                        <Text
                            className={`font-psemibold text-[#05030D]`}
                            style={{
                                fontSize: fontSizes.FONT28,
                                fontWeight: "600"
                            }}>
                            {slide.title}
                        </Text>

                        <Text
                            className={`font-plight text-[#3E3B54]`}
                            style={{
                                paddingVertical: windowHeight(12),
                                fontSize: fontSizes.FONT18,
                            }}>
                            {slide.subTitle}
                        </Text>
                    </View>
                </View>
            </View >

        </>
    )
}

export default Slide;