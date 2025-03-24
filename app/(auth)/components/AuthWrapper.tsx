import { Image, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { windowHeight, windowWidth } from '@/themes/App'
import authImage from '@/assets/images/icon.png';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView className='bg-[#fff] h-full'>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className='flex-1'
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: windowWidth(22),
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View>
                        <Image
                            source={authImage}
                            style={{
                                width: windowWidth(200),
                                height: windowHeight(140),
                                resizeMode: 'contain',
                                marginBottom: windowHeight(20),
                            }}
                        />
                    </View>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AuthWrapper