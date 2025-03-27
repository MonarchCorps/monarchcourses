import { Box } from '@/components/ui/box'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function index() {
    return (
        <SafeAreaView>
            <Text>Tabs</Text>
            <Box className="bg-primary-500 p-5">
                <Text className="text-typography-0">This is the Box</Text>
            </Box>
        </SafeAreaView>
    )
}

export default index