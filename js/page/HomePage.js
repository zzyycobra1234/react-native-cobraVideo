'use strict';
import {
    RefreshControl, StyleSheet,
    View, Text, ScrollView,
    Switch, TouchableNativeFeedback,
    TouchableOpacity, Platform,
    PixelRatio,
    Dimensions, Image
    , Alert, AlertIOS
} from 'react-native';
import React, {Component, PropTypes} from 'react';
import ImageButton from '../component/ImageButtonWithText';
import px2dp from '../util/px2dp';
import Swiper from 'react-native-swiper';
import theme from '../config/theme';

// http://api.fffml.com/sites
// First

//
var slideItemsData = [];
var moveData = [];
var tvData = [];
var comicData = [];
var artsData = [];



const deviceWidthDp = Dimensions.get('window').width;
const swiperHeight = 150;
const imgBtnImages = [
    require('../res/image/home_type_dy.png'),
    require('../res/image/home_type_dsj.png'),
    require('../res/image/home_type_dm.png'),
    require('../res/image/home_type_zy.png'),

];


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

                    <Swiper
                        height={px2dp(swiperHeight)}
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        autoplay={true}
                        bounces={true}
                        dot={<View
                            style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}
                        activeDot={<View
                            style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}
                        loop={true}
                        paginationStyle={{
                            bottom: 0, left: null, right: 10
                        }}
                    >
                        {this.renderSwiperView()}

                    </Swiper>


                    <View style={styles.imageBtnLine}>
                        {this.state.btnName.map((item, index) => {
                            return (
                                <ImageButton
                                    key={index}
                                    image={imgBtnImages[index]}
                                    imgSize={px2dp(35)}
                                    text={item}
                                    color="#000"
                                    btnStyle={styles.imgBtn}
                                    onPress={this._imageButtonCallback.bind(this, index)}/>
                            )
                        })
                        }
                    </View>
                    {this.renderMoveSortBoxView()}

                </ScrollView>
            </View>
        );
    }

    // 返回所有的轮播图
    renderSwiperView() {
        let swiperViews = [];
        for (let i in slideItemsData) {
            let data = slideItemsData[i];
            // console.log(data.pic);

            swiperViews.push(
                <View
                    key={i}
                    style={styles.slideItemStyle}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            backgroundColor: '#808080aa',
                            position: 'absolute',
                            bottom: 0,
                            width: deviceWidthDp,
                            zIndex: 1,
                            paddingLeft: 5,
                            color: 'white'
                        }}
                    >{data.name}</Text>
                    <Image
                        style={styles.image}
                        source={{uri: data.pic}}
                        resizeMode="stretch"/>
                </View>
            );
        }
        return swiperViews;
    };


    // 电影外框图
    renderMoveSortBoxView() {
        let view = (
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                backgroundColor: 'white'
            }}>

                <Text
                    style={{
                        flex: 1,
                        fontSize: 15,
                        marginLeft: 10,
                        color: 'black',
                    }}
                >{'热播电影'}</Text>
                <Text
                    style={{
                        fontSize: 10,
                        color: 'black',
                        alignItems: 'center',
                        paddingRight: 10,
                    }}
                >{'more'}</Text>
            </View>
        );

        return view;
    }


// 电影itemView
    renderMoveItemView() {
        return (
            <View >
                <Text
                    style={{
                        flex: 1,
                        fontSize: 15,
                        marginLeft: 10,
                        color: 'black',
                    }}
                >{'热播电影'}</Text>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 15,
                        marginLeft: 10,
                        color: 'black',
                    }}
                >{'热播电影'}</Text>
                <Image
                    style={styles.image}
                    source={{uri: data.pic}}
                    resizeMode="stretch"/>
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
                this.analysisSlideListData(data.slide_list);
                this.analysisMoveListData(data.move_list, moveData);
                this.analysisMoveListData(data.tv_list, tvData);
                this.analysisMoveListData(data.comic_list, comicData);
                this.analysisMoveListData(data.arts_list, artsData);


                this.setState({
                    loadedData: true,
                    refreshing: false
                });
            })


    }

    analysisSlideListData(swiperList) {
        for (let i in swiperList) {
            let slideList = {
                pic: swiperList[i].pic,
                id: swiperList[i].vod_id,
                name: swiperList[i].name,
            }
            slideItemsData.push(slideList);
        }
    }


    analysisMoveListData(data, dataContent) {
        for (let index in data) {
            let dataList = {
                id: data[index].id,
                name: data[index].name,
                pic: data[index].pic,
                title: data[index].title,
                year: data[index].year,
                area: data[index].area,
                actor: data[index].actor,
            }
            dataContent.push(dataList);
        }

        console.log(dataContent);
    }


    componentDidMount() {
        this._fetchData();
    }


    _alert() {
        if (Platform.OS === 'android') {
            Alert.alert(
                'Message',
                "This function currently isn't available",
                [{
                    text: 'OK', onPress: () => {
                    }
                }]
            );
        } else if (Platform.OS === 'ios') {
            AlertIOS.alert(
                'Message',
                "This function currently isn't available",
                [{
                    text: 'OK', onPress: () => {
                    }
                }]
            );
        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    slideItemStyle: {
        flex: 1,
        backgroundColor: '#808080aa',

    },
    image: {
        height: px2dp(swiperHeight),
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
        width: Dimensions.get('window').width / imgBtnImages.length,
    }
});