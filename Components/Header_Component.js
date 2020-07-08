import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header_Component = (props) => {
    return (
        <View style={{ backgroundColor:props.backgroundColor, height: 56, flexDirection: 'row' ,justifyContent:props.justifyContent1}}>
            <View style={{ width:props.width1,  marginLeft: 5  , marginTop: 10,}}>
                <TouchableOpacity style={{ width: 40, height: 40,}} onPress={props.onPress}>
                    <Image source={props.source} style={{width:props.width, height:props.height,borderRadius:props.borderRadius}} />
                    </TouchableOpacity>
            </View>
            <View style={{ width: props.width2 }}>
                <Text style={[styles.text,{textAlign:props.textAlign1,color:props.color}]}>{props.text}</Text>
            </View>
            <View style={{ width: props.width3 ,marginTop:13}}>
            <TouchableOpacity style={{ width: 40, height: 40}} onPress={props.onPress1}>
            <Image source={props.source1} style={styles.image} />
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header_Component;
const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
      
      
    },
    text: {
        fontSize: 25,
        marginTop: 5,


    }
})