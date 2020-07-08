import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import Header_Component from './Header_Component';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default class Forgate_Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldpassword: '',
            newpassword: '',
            confirmpassword: '',
            validation: '',
            oldpassword1: ''



        }
    }

    componentDidMount = async () => {
        const user = await firestore()
            .collection('Users')
            .doc('0yM2vI7veCsvW7rrUSW7')
            .get();
        this.setState({
            oldpassword1: user._data.Password
        })
    }

    handleForgatePassword = () => {
        if (this.state.oldpassword == '') {
            this.setState({ validation: 'Old Password is empty' })
        }
        else if (this.state.newpassword == '') {
            this.setState({ validation: 'New Password is empty' })
        }
        else if (this.state.confirmpassword == '') {
            this.setState({ validation: 'Confirm Password is empty' })
        }
        else {

            if(this.state.oldpassword != this.state.oldpassword1){
                this.setState({ validation: 'Old password is not matching' })
            } 
            else if(this.state.newpassword != this.state.confirmpassword){
                this.setState({ validation: 'New and Confirm password is not matching' })
            }
            else
             {

                firestore()
                .collection('Users')
                .doc('0yM2vI7veCsvW7rrUSW7')
                .update({
                    Password:this.state.confirmpassword
                })
                .then(() => {alert('success')
                this.props.navigation.navigate('Login_Screen')}
                )

                this.setState({
                    oldpassword: '',
                    newpassword: '',
                    confirmpassword: '',
                    validation: ''
                })
            }
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ff4d4d', flex: 1 }}>
                <ScrollView>
                    <Header_Component source={require('./ICONS/back_white.png')} width={30} height={30} color={'white'}
                        text={'Forgate Password'} width1={'25%'} width2={'75%'} backgroundColor={'#ff4d4d'}
                        onPress={() => this.props.navigation.goBack()} />

                    <View style={{ marginTop: 55, justifyContent: 'center', alignItems: 'center' }}>

                        <TextInput
                            style={{
                                borderBottomWidth: 0.5, borderColor: 'white', width: 300,
                                textAlign: 'center', fontSize: 25, fontFamily: 'sans-serif-light', marginTop: 50
                            }}
                            placeholderTextColor={'white'}
                            placeholder="Old Password"
                            value={this.state.oldpassword}
                            onChangeText={(oldpassword) => { this.setState({ oldpassword }) }}
                        />

                        <TextInput
                            style={{
                                borderBottomWidth: 0.5, borderColor: 'white', width: 300,
                                textAlign: 'center', fontSize: 25, fontFamily: 'sans-serif-light', marginTop: 20
                            }}
                            placeholderTextColor={'white'}
                            placeholder="New Password"
                            value={this.state.newpassword}
                            onChangeText={(newpassword) => { this.setState({ newpassword }) }}
                        />
                        <TextInput
                            style={{
                                borderBottomWidth: 0.5, borderColor: 'white', width: 300,
                                textAlign: 'center', fontSize: 25, fontFamily: 'sans-serif-light', marginTop: 20
                            }}
                            placeholderTextColor={'white'}
                            placeholder="Confirm Password"
                            value={this.state.confirmpassword}
                            onChangeText={(confirmpassword) => { this.setState({ confirmpassword }) }}
                        />
                    </View>


                    {this.state.validation == '' ? null
                        :
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>{this.state.validation}</Text>

                        </View>
                    }

                    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.handleForgatePassword}>
                            <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                                <Image source={require('./ICONS/right_arrow.png')} style={{ width: 50, height: 50 }} />

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
