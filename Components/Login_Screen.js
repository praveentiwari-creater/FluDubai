import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Image,ScrollView ,Alert} from 'react-native'
import Header_Component from './Header_Component';
import auth from '@react-native-firebase/auth';

export default class Login_Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            validation: ''
          


        }
    }

    handleLogin =()=>{
        if(this.state.email == ''){
            this.setState({validation:'Email is empty'})
        }
        else if(this.state.password == '' || this.state.password.length < 6 ){
            this.setState({validation:'Password is empty or less than 6 digit'})
        }
        else{
            auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Choose_Your_Tracker'))
            .catch((error) =>this.setState({ validation:'Email and Password is not matching' }),
           
            )
        
            this.setState({ 
            email:'',
            password:'',
            validation: ''
        })
        // console.log("state",this.state.password,this.state.email)
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ff4d4d', flex: 1 }}>
                <ScrollView>
                <Header_Component source={require('./ICONS/back_white.png')} width={30} height={30}  color={'white'}
                 text={'Log In'} width1={'35%'} width2={'65%'} backgroundColor={'#ff4d4d'}
                 onPress={()=>this.props.navigation.goBack()}/>
                <View style={styles.view1}>
                    <Text style={styles.text}>flu</Text>
                    <Text style={[styles.text, { fontWeight: 'bold', marginLeft: 5 }]}>dubai</Text>
                </View>

                <View >
                    <Text style={{
                        textAlign: 'center', fontSize: 30, color: 'white',
                        fontFamily: 'sans-serif-light'
                    }}>Good Steps</Text>
                </View>

                <View style={{ marginTop: 55, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        style={{
                            borderBottomWidth: 1, borderColor: 'white', width: 300,
                            textAlign: 'center', fontSize: 25, fontFamily: 'sans-serif-light'
                        }}
                        placeholderTextColor={'white'}
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(email)=>{this.setState({email})}}
                    />
                    <TextInput
                        style={{
                            borderBottomWidth: 1, borderColor: 'white', width: 300,
                            textAlign: 'center', fontSize: 25, fontFamily: 'sans-serif-light', marginTop: 20
                        }}
                        placeholderTextColor={'white'}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(password)=>{this.setState({password})}}
                    />
                </View>
              
                    <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width:300, flexDirection: 'row',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgate_Password')}>
                    <Text style={{ fontSize:20,color:'white'}}>Forgote Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register_Screen')}>
                        <Text style={{ fontSize:20,color:'white'}}>New User</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {this.state.validation == '' ? null
                            :
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'blue', fontSize: 18 }}>{this.state.validation}</Text>

                            </View>
                        }

                <View style={{marginTop:35,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={this.handleLogin }>
                    <View style={{width:70,height:70,borderRadius:35,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                      
                    <Image source={require('./ICONS/right_arrow.png')} style={{width:50,height:50}}/>
                    
                    </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
        flexDirection: 'row',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 45,
        fontFamily: "serif",
        // fontStyle:'italic'
    },
})
