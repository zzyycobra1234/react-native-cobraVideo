import {
    RefreshControl, StyleSheet,
    View, Text, ScrollView,
    Switch, TouchableNativeFeedback,
    TouchableOpacity, Platform,
    PixelRatio, BackAndroid,
    Dimensions
} from 'react-native';
import React, {Component, PropTypes} from 'react';
import ImageButton from '../component/ImageButtonWithText';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

// http://api.fffml.com/sites
// First
export  default  class HomeFragment extends Component {


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
                        height={px2dp(130)}
                        autoplay={true}
                        bounces={true}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[0]} resizeMode="stretch"/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[1]} resizeMode="stretch"/>
                        </View>
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
                    {/*{ this._renderListView() }*/}
                </ScrollView>
            </View>
        );
    }

    _imageButtonCallback(position) {
        this._alert();
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