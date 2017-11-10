/**
 *
 *        常用的全局变量
 *
 */
import { Dimensions, StyleSheet, PixelRatio, Platform, Alert } from 'react-native'
import FontSize from './TextSize'
import Colors from './Colors'
import { px2dp } from './Tool'
import * as Fetch from './Fetch'

import ImageResizer from 'react-native-image-resizer'

let { height, width } = Dimensions.get('window')


// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 常用颜色
global.COLORS = Colors;
// 适配字体
global.FONT_SIZE = FontSize;
// 用户登录状态
global.TOKEN = false;
// 屏幕适配
global.px2dp = px2dp;
// 图片压缩
global.ImageResizer = ImageResizer;
// 弹出框
global.Alert = Alert;
// 网络请求
global.Fetch = Fetch;