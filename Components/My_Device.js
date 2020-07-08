import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
import Header_Component from './Header_Component';
export default class My_Device extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                
                <Header_Component text={'MY DEVICE'} width2={'100%'}  color={'white'}
                 textAlign1={'center'} backgroundColor={'#ff4d4d'} justifyContent1={'center'}/>
                 
<ScrollView>
<View  style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.heart}>
<Image source={require('./ICONS/heart.png')} style={{width:120,height:120}}/>
                </View>
                <Text style={{fontSize:35,color:'grey',marginTop:5}}>HEALTH KIT</Text>
               

                <View style={{marginTop:35,justifyContent:'center',alignItems:'center',marginTop:130}}>
                <TouchableOpacity>
                    <View style={{width:70,height:70,borderRadius:35,backgroundColor:'#ff4d4d',justifyContent:'center',alignItems:'center'}}>
                      
                    <Image source={require('./ICONS/right_arrow_white.png')} style={{width:50,height:50}}/>
                    
                    </View>
                    </TouchableOpacity>
                    <Text style={{fontSize:23,color:'grey',marginTop:10}}>Switch to New Device</Text>
                    </View>
                   
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    heart:{
width:170,
height:180,
borderRadius:30,
backgroundColor:'#ebebe0',marginTop:70,
justifyContent:'center',
alignItems:'center'
    }
})