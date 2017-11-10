/**
 *
 *    详情页
 *
 */
import React,{ Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Detail extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

// //pages
// import Login from './pages/Login'
// import Home from './pages/Home'
// import Center from './pages/Center'
// import Detail from './pages/Detail'