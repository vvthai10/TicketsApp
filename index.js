import React, { Component, useState } from 'react';
import { AppRegistry, View } from 'react-native';
import App from './App';
import Login from './src/components/login';
import Splash from './src/components/splash';

const Main = () => {
    const [curScreen, setCurScreen] = useState(0);

    const handleChangeLogin = () => {
        setInterval(() => {
            setCurScreen(1);
        }, 5000);
    };

    handleChangeLogin();

    let mainScreen = curScreen === 0 ? <Splash /> : <Login />;

    return mainScreen;
};

// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { currentScreen: 'Splash' };
//         console.log('Start doing some tasks for about 3 seconds');
//         setTimeout(() => {
//             console.log('Done some tasks for about 3 seconds');
//             this.setState({ currentScreen: 'Login' });
//         }, 3000);
//     }
//     render() {
//         const { currentScreen } = this.state;
//         let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
//         return mainScreen;
//     }
// }

AppRegistry.registerComponent('TicketsApp', () => Main);
