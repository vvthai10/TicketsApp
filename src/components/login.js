import React, { useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

const Login = () => {
    const ref = useRef(0);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView style={styles.container}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={require('../images/logo.png')} />
                            <Text style={styles.title}>Account Information</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter username/email"
                                placeholderTextColor="rgba(255,255,255,0.8)"
                                keyboardType="email-address"
                                returnKeyType="next"
                                autoCorrect={false}
                                onSubmitEditing={() => ref.current.focus()}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter password"
                                placeholderTextColor="rgba(255,255,255,0.8)"
                                returnKeyType="go"
                                secureTextEntry
                                autoCorrect={false}
                                ref={ref}
                            />
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // marginBottom: 100,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Login;
