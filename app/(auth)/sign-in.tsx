import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';
import FormInput from '@/components/form/FormInput';
import { fontSizes, IsIPAD, windowHeight, windowWidth } from '@/themes/App';
import AuthWrapper from './components/AuthWrapper';

function SignIn() {

    return (
        <AuthWrapper>
            <View className='items-center' style={{ marginBottom: windowWidth(22) }}>
                <Text
                    className='font-psemibold text-center'
                    style={styles.title}
                >
                    Sign in to your Account
                </Text>
                <Text className='font-pregular' style={styles.subTitle}>
                    Don't have an account?{' '}
                    <Link href="/(auth)/sign-up" className='text-[#021940] font-psemibold underline'>
                        Sign Up
                    </Link>
                </Text>
            </View>

            <View className='min-w-full flex flex-col gap-y-6' style={styles.formContainer}>
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                />
                <FormInput
                    label="Password"
                    isPassword
                />
            </View>

            <Pressable className='w-full bg-[#021940] items-center' style={styles.button}>
                <Text className='font-pmedium text-[#fff]' style={styles.buttonText}>Login In</Text>
            </Pressable>

            <View className='flex-row items-center gap-x-5' style={styles.alternateContainer}>
                <View className='bg-[#9a969695] h-[1px] flex-1'></View>
                <Text className='font-pregular' style={styles.alternateText}>or login with</Text>
                <View className='bg-[#9a969695] h-[1px] flex-1'></View>
            </View>

            <View style={styles.otherAuthContainer}>
                <Pressable>
                    <Image
                        source={require("@/assets/images/onboarding/google.png")}
                        style={styles.otherAuthImage}
                    />
                </Pressable>

                <Pressable>
                    <Image
                        source={require("@/assets/images/onboarding/github.png")}
                        style={styles.otherAuthImage}
                    />
                </Pressable>

                <Pressable>
                    <Image
                        source={require("@/assets/images/onboarding/apple.png")}
                        style={styles.otherAuthImage}
                    />
                </Pressable>
            </View>

            <Text className='font-pregular'>
                View our
                <Text className='font-psemibold text-[#021940]'>{' '}Term's of use{' '}</Text>
                and{' '}
                <Text className='font-psemibold text-[#021940]'>Privacy Policy</Text>
            </Text>
        </AuthWrapper>
    );
}

export default SignIn;


const styles = StyleSheet.create({
    title: {
        fontSize: IsIPAD ? fontSizes.FONT18 : fontSizes.FONT28,
        marginBottom: windowHeight(3),
    },
    subTitle: {
        fontSize: IsIPAD ? fontSizes.FONT11 : fontSizes.FONT18
    },
    formContainer: {
        marginTop: windowHeight(6)
    },
    button: {
        marginTop: windowHeight(20),
        paddingVertical: windowHeight(14),
        borderRadius: 10,
    },
    buttonText: {
        fontSize: IsIPAD ? fontSizes.FONT13 : fontSizes.FONT18
    },
    alternateContainer: {
        marginTop: windowHeight(22)
    },
    alternateText: {
        fontSize: IsIPAD ? fontSizes.FONT13 : fontSizes.FONT18
    },
    otherAuthContainer: {
        paddingVertical: windowHeight(20),
        flexDirection: 'row',
        gap: windowWidth(20)
    },
    otherAuthImage: {
        width: IsIPAD ? windowWidth(28) : windowWidth(40),
        height: windowHeight(40),
        resizeMode: "contain"
    }
})