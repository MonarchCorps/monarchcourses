import { fontSizes } from '@/themes/App';
import { ActivityIndicator, View } from 'react-native'

function Loader() {
    return (
        <View>
            <ActivityIndicator size={fontSizes.FONT32} />
        </View>
    )
}

export default Loader