import React, {Component} from 'react';
import {Navigator} from 'react-native';
import SplashPage from '../page/SplashPage';

export default class Navigation extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{component: SplashPage}}
                renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }


}