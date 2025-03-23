import { Side } from "@/constants"
import { SharedValue } from "react-native-reanimated"
import { Vector } from "react-native-redash"

export type WaveProps = {
    side: Side,
    children: React.ReactElement,
    position: Vector<SharedValue<number>>,
    isTransitioning: SharedValue<boolean>
}