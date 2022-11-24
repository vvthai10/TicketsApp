import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = () => {
    // const [time, setTime] = useState(0);

    // const handleStart = () => {
    //     setInterval(() => {
    //         setTime((prevTime) => prevTime + 1);
    //     }, 1000);
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my app</Text>
            {/* <Text style={styles.title}>{`Welcome to app: ${time}`}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32, 53, 70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
    },
});

export default Splash;
