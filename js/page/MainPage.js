/**
 * Created by Administrator on 2017/2/4 0004.
 */
'use strict';
import React, {Component} from 'react';
import {
    Text, View, BackAndroid, ToastAndroid, StyleSheet,ScrollView
} from 'react-native';
import TabBar from '../component/TabBar';


// 首页
export  default  class MainPage extends Component {


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar navigator={this.props.navigator}/>
            </View>
        );
    }

    // static switchToWebViewPage(rowData){
        // // 跳转
        // this.props.navigator.push({
        //     component: WebViewPage,
        //     args: {rowData: rowData}
        // });
    // }

    // static switchToIndividualPage(userInfo){
        // this.props.navigator.push({
        //     component: IndividualPage,
        //     args: {user: userInfo}
        // });
    // }


    // componentDidMount(){
    //     SplashScreen.hide();
    //     BackAndroid.addEventListener('hardwareBackPress', function () {
    //         BackAndroid.exitApp(0);
    //         return true;
    //     });
    // }

}
