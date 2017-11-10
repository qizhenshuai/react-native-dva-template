/**
 *
 *      项目的统一入口文件
 *
 */

import { AppRegistry } from 'react-native';

import './utils/Global'
import App from './App'

if(!__DEV__){
  global.console = {
    info:()=>{},
    log :()=>{},
    warn:()=>{},
    error:()=>{}
  }
}

AppRegistry.registerComponent('qizhenshuai', () => App);
