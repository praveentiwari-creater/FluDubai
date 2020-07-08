import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'

export default class Login_Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            COLOR1: '#ff4d4d',
            textCOLOR1: 'white',
            COLOR2: '#ff4d4d',
            textCOLOR2: 'white'
        }
    }

    login=()=>{
        this.setState({
            COLOR1: 'white', textCOLOR1: '#ff4d4d',
            COLOR2: '#ff4d4d', textCOLOR2: 'white',
        })
        this.props.navigation.navigate('Login_Screen')
    }

    register=()=>{
        this.setState({
            COLOR2: 'white', textCOLOR2: '#ff4d4d',
            COLOR1: '#ff4d4d', textCOLOR1: 'white',
        })
        this.props.navigation.navigate('Register_Screen')
    }
    render() {
        return (
            <View style={styles.view}>
                <ScrollView>
                <View style={styles.view1}>
                    <Text style={styles.text}>flu</Text>
                    <Text style={[styles.text, { fontWeight: 'bold', marginLeft: 5 }]}>dubai</Text>
                </View>

                <View >
                    <Text style={{
                        textAlign: 'center', fontSize: 32, color: 'white',
                        fontFamily: 'sans-serif-light'
                    }}>Good Steps</Text>
                </View>

                <View style={{
                    marginTop:'60%', justifyContent: 'center', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-around'
                }}>

                    <View style={[styles.button, { backgroundColor: this.state.COLOR1 }]}>
                        <TouchableOpacity onPress={this.login}>
                            <Text style={{
                                textAlign: 'center', fontSize: 31, marginTop: 3,
                                color: this.state.textCOLOR1
                            }}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.button, { backgroundColor: this.state.COLOR2 }]}>
                        <TouchableOpacity onPress={this.register}>
                            <Text style={{
                                textAlign: 'center', fontSize: 31, marginTop: 3,
                                color: this.state.textCOLOR2
                            }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                        By Signing up you agree to</Text>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                        Terms of Service and Privacy Policy of Company</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#ff4d4d',
        
    },
    view1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 130,
        flexDirection: 'row',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
        fontFamily: "serif",
        // fontStyle:'italic'
    },
    button: {
        width: 150,
        height: 60,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6
    }
})