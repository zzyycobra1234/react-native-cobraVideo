import React, {Component} from 'react';
import {Navigator} from 'react-native';
import SplashScreen from '../native_modules/SplashScreen';
import HomePage from '../page/MainPage';

export default class Entry extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{component: HomePage}}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                    }
                }/>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}