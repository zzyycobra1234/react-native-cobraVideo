/**
 * Created by Administrator on 2017/2/4 0004.
 */

import React, {Component} from 'react';
import {
    Text, View, BackAndroid, ToastAndroid, StyleSheet,
} from 'react-native';
import TabBar from '../component/TabBar';
// import SettingPage from './SettingPage';


export  default  class SplashPage extends Component {


    // constructor(props){
    //     super(props);
    //     SplashPage.switchToWebViewPage = SplashPage.switchToWebViewPage.bind(this);
    //     SplashPage.switchToIndividualPage = SplashPage.switchToIndividualPage.bind(this);
    // }
    //
    //
    // static switchToWebViewPage(rowData){
    //     this.props.navigator.push({
    //         // component: WebViewPage,
    //         args: {rowData: rowData}
    //     });
    // }
    //
    // static switchToIndividualPage(userInfo){
    //     this.props.navigator.push({
    //         // component: IndividualPage,
    //         args: {user: userInfo}
    //     });
    // }

    // render(){
    //     return(
    //         <View style={{flex: 1, justifyContent: 'flex-end'}}>
    //             {/*<TabBar navigator={this.props.navigator}/>*/}
    //         </View>
    //     );
    // }


    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.welcome}>
    //                 This is splashPage !
    //             </Text>
    //
    //         </View>
    //     );
    // }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar navigator={this.props.navigator}/>
                {/*<SettingPage navigator={this.props.navigator}/>*/}

            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });