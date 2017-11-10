import {
  AsyncStorage,
  Platform
} from 'react-native'

export default {
  async isLogin(){
    let data = await AsyncStorage.getItem('TOKEN');
    if(data === null){
      console.log( 'false' );
      global.TOKEN = false
      return false
    }else {
      console.log( 'true' );
      global.TOKEN = true
      return true
    }
  }
}

let basePx = Platform.OS === 'ios' ? 750 : 720;
exports.px2dp = function px2dp(px:number) : number{
  return px / 750 * SCREEN_WIDTH
}