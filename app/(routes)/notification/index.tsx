import NotificationScreen from '@/screens/notification/NotificationScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Notification() {
    return (
        <GestureHandlerRootView className='flex-1'>
            <NotificationScreen />
        </GestureHandlerRootView>
    )
}