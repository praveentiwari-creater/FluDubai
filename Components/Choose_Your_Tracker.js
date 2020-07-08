import React, { Component } from 'react'
import { Text, View, Image, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native'
import Header_Component from './Header_Component';


export default class Choose_Your_Tracker extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{flex:1}}>
                <Header_Component text={'CHOOSE YOUR TRACKER'} textAlign1={'center'}
                  color={'white'} backgroundColor={'#ff4d4d'} />
                  </View>
                  <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center',flex:9 ,marginTop:40}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',flex:5}}>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Step_Up')}>
                        <View style={[styles.heart,{backgroundColor:'black'}]}>
                        <Text style={{fontSize:45,color:'#ff9900'}}>STEP</Text>
                        <Text style={{fontSize:45,color:'#ff9900'}}>UP</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('My_Device')}>
                        <View style={[styles.heart1,{backgroundColor:'#ccccff'}]}>
                            <Image source={require('./ICONS/heart.png')} style={{ width: 120, height: 120 }} />
                            <Text style={{fontSize:25}}>HEALTH KIT</Text>
                        </View>
                        </TouchableOpacity>

                       
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-around',flex:5}}>
                   
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile_Screen')}>
                        <View style={[styles.heart,{backgroundColor:'#ccccff'}]}>
                        <Text style={{fontSize:40}}>Profile</Text>
                        </View>
                        </TouchableOpacity>
                   
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cart_Design')}>
                        <View style={[styles.heart1,{backgroundColor:'black'}]}>
                        <Text style={{fontSize:32,color:'white',textAlign:'center'}}>Cart Design</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    heart: {
        width: 150,
        height: 240,
        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
        marginLeft:20,
    },
    heart1: {
        width: 150,
        height: 240,
        borderRadius: 30,
         marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:20
    }
})
