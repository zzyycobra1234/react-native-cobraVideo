import {
    RefreshControl, StyleSheet,
    View, Text, ScrollView,
    Switch, TouchableNativeFeedback,
    TouchableOpacity, Platform,
    PixelRatio,
    Dimensions, Image,
} from 'react-native';
import React, {Component, PropTypes} from 'react';
import ImageButton from '../component/ImageButtonWithText';
import px2dp from '../util/px2dp';
import Swiper from 'react-native-swiper';
import theme from '../config/theme';

// http://api.fffml.com/sites
// First
export  default  class HomeFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [],
            btnName: ['电影', '电视剧', '动漫', '综艺']
        }
    }

    render() {
        return (
            <View >
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['red', '#ffd500', '#0080ff', '#99e600']}
                            tintColor={theme.themeColor}
                            title="Loading..."
                            titleColor={theme.themeColor}
                        />
                    }>

                </ScrollView>
            </View>
        );
    }

    _imageButtonCallback(position) {
        this._alert();
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }


    _fetchData() {
        fetch("http://api.fffml.com/sites")
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.data;
                let entry = data.slide_list;

                console.log(data)
                console.log(entry)

                for(let i in entry){
                    console.log(entry[i])
                }

            })
    }

    componentDidMount() {
        this._fetchData();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    slide: {},
    image: {
        height: px2dp(130),
        width: Dimensions.get('window').width
    },
    imageBtnLine: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#c4c4c4'
    },
    imgBtn: {
        height: px2dp(80),
        width: Dimensions.get('window').width / 3,
    }
});