import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Animated } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';

export default class Register_Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            show2: false,
            username: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            city: '',
            counrty: '',
            height: '',
            mezor:'',
            weight: '',
            gender: '',
            dob: '',
            validation: '',
            touch: false,
            COLOR1: '#ff4d4d',
            textCOLOR1: 'white',
            COLOR2: '#ff4d4d',
            textCOLOR2: 'white',
            imagepicker:''


        }
    }

    handleSignUp = () => {
        if (this.state.username == '') {
            this.setState({ validation: 'User name is empty' })
        }
        else if (this.state.email == '') {
            this.setState({ validation: 'Email is empty' })
        }
        else if (this.state.password == '' || this.state.password.length < 6) {
            this.setState({ validation: 'Password is empty or less than 6 digit' })
        }
        else if (this.state.firstname == '') {
            this.setState({ validation: 'First Name is empty' })
        }
        else if (this.state.lastname == '') {
            this.setState({ validation: 'Last Name is empty' })
        }
        else if (this.state.city == '') {
            this.setState({ validation: 'City is empty' })
        }
        else if (this.state.counrty == '') {
            this.setState({ validation: 'Country is empty' })
        }
        else if (this.state.height == '') {
            this.setState({ validation: 'Height is empty' })
        }
        else if (this.state.mezor == '') {
            this.setState({ validation: 'Please select Feet or Inch' })
        }
        else if (this.state.weight == '') {
            this.setState({ validation: 'Weight is empty' })
        }
        else if (this.state.gender == '') {
            this.setState({ validation: 'Pleade select gender' })
        }
        else if (this.state.dob == '') {
            this.setState({ validation: 'DOB is empty' })
        }
        else if (this.state.imagepicker == '') {
            this.setState({ validation: 'Image is empty' })
        }
        else {
            // console.log("state",this.state.username,this.state.password,this.state.email,this.state.firstname,this.state.lastname
            // ,this.state.city,this.state.counrty,this.state.height,this.state.weight,this.state.gender,this.state.dob)
            auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => this.props.navigation.navigate('Login_Screen'))
                .catch(error => console.log("errorMessage:", error.message))

            firestore()
                .collection('Users')
                .doc('0yM2vI7veCsvW7rrUSW7')
                .set({
                    UserName: this.state.username,
                    Email: this.state.email,
                    Password: this.state.password,
                    FirstName: this.state.firstname,
                    LastName: this.state.lastname,
                    City: this.state.city,
                    Country: this.state.counrty,
                    Height: this.state.height,
                    Measurement:this.state.mezor,
                    Weight: this.state.weight,
                    Gender: this.state.gender,
                    DOB: this.state.dob,
                    Uri:this.state.imagepicker
                })
                .then(() => {
                    // Alert.alert('User added!');
                });

            this.setState({
                username: '',
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                city: '',
                counrty: '',
                height: '',
                mezor:'',
                weight: '',
                gender: '',
                dob: '',
                imagepicker:'',
                show1: false,
                show2: false,
            })
        }
    }


    login = () => {
        this.setState({
            COLOR1: 'white', textCOLOR1: '#ff4d4d',
            COLOR2: '#ff4d4d', textCOLOR2: 'white',
            mezor:'Feet',touch:false
        })
    }

    register = () => {
        this.setState({
            COLOR2: 'white', textCOLOR2: '#ff4d4d',
            COLOR1: '#ff4d4d', textCOLOR1: 'white',
            mezor:'Inch',touch:false
        })
    }

    image=()=>{
        ImagePicker.showImagePicker( (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
             console.log('imagePicker',source.uri);
          
              this.setState({
                imagepicker:source.uri,
              });
            }
          });
    }
    render() {
        
        const {imagepicker}=this.state;
        console.log('render console===>',imagepicker)
        return (
            <View style={{ flex: 1, backgroundColor: '#ff4d4d' }}>
                <ScrollView>
                    <View >
                        <Text style={{ textAlign: 'center', marginTop: 1, color: 'white', fontSize: 28 }}> REGISTER </Text>
                    </View>

                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.image}>
                        <View style={styles.view}>
                            {this.state.imagepicker=='' ?
                        <Text style={{fontSize:22}}>Image</Text>  
                        :  
                        
                            <Image source={{uri:imagepicker}}
                             style={{ width: 70, height: 70,borderRadius:35 }} />
                        }
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View>
                            <TextInput
                                style={styles.textinput}
                                placeholder="User Name"
                                placeholderTextColor={'white'}
                                value={this.state.username}
                                onChangeText={(username) => { this.setState({ username }) }}

                            />
                        </View>

                        <View>
                            <TextInput
                                style={styles.textinput}
                                placeholder="E-mail"
                                placeholderTextColor={'white'}
                                value={this.state.email}
                                onChangeText={(email) => { this.setState({ email }) }}
                            />
                        </View>

                        <View>
                            <TextInput
                                style={styles.textinput}
                                placeholder="Password"
                                placeholderTextColor={'white'}
                                value={this.state.password}
                                onChangeText={(password) => { this.setState({ password }) }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TextInput
                                    style={styles.textinput2}
                                    placeholder="First Name"
                                    placeholderTextColor={'white'}
                                    value={this.state.firstname}
                                    onChangeText={(firstname) => { this.setState({ firstname }) }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Last Name"
                                    placeholderTextColor={'white'}
                                    value={this.state.lastname}
                                    onChangeText={(lastname) => { this.setState({ lastname }) }}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TextInput
                                    style={styles.textinput2}
                                    placeholder="City"
                                    placeholderTextColor={'white'}
                                    value={this.state.city}
                                    onChangeText={(city) => { this.setState({ city }) }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Country"
                                    placeholderTextColor={'white'}
                                    value={this.state.counrty}
                                    onChangeText={(counrty) => { this.setState({ counrty }) }}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { width: 102 }]}
                                    placeholder="Height"
                                    placeholderTextColor={'white'}
                                    value={this.state.height}
                                    onChangeText={(height) => { this.setState({ height }) }}

                                />
                            </View>

                            <View style={{ borderBottomWidth: 0.5, borderColor: 'white', }}>
                                <View style={{ width: 36 }}>
                                    <TouchableOpacity onPress={() => this.setState({ touch: !this.state.touch })}>
                                        {this.state.touch == false ?

                                            <Image source={require('./ICONS/up_white.png')} style={{ width: 20, height: 20, marginTop: 17 }} />
                                            :
                                            <Image source={require('./ICONS/down_white.png')} style={{ width: 20, height: 20, marginTop: 17 }} />
                                        }
                                    </TouchableOpacity>
                                </View>
                                {this.state.touch == false ?
                                    null
                                    :
                                    <Animated.View style={{ top: 12 }}>
                                        <View style={{
                                            width: 70, height: 30,
                                            backgroundColor: this.state.COLOR1,
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <TouchableOpacity onPress={this.login}>
                                                <Text style={{ fontSize: 19, color: this.state.textCOLOR1 }}>Feet</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            width: 70, height: 30, backgroundColor: this.state.COLOR2,
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <TouchableOpacity onPress={this.register}>
                                                <Text style={{ fontSize: 19, color: this.state.textCOLOR2 }}>Inch</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Animated.View>
                                }

                            </View>

                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Weight"
                                    placeholderTextColor={'white'}
                                    value={this.state.weight}
                                    onChangeText={(weight) => { this.setState({ weight }) }}
                                />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <TouchableOpacity onPress={() => this.setState({ show1: true, show2: false, gender: 'Male' })}>
                                    <View style={{
                                        width: 20, height: 20, borderRadius: 10,
                                        backgroundColor: this.state.show1 == true ? 'black' : 'white', marginTop: 20
                                    }}>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 21, marginLeft: 10, marginRight: 75,
                                    fontFamily: 'sans-serif-light', marginTop: 15, color: 'white'
                                }}>Male</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10 }}>
                                <TouchableOpacity onPress={() => this.setState({ show2: true, show1: false, gender: 'Female' })}>
                                    <View style={{
                                        width: 20, height: 20, borderRadius: 10,
                                        backgroundColor: this.state.show2 == true ? 'black' : 'white', marginTop: 20
                                    }}>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 21, marginLeft: 10, marginRight: 25,
                                    fontFamily: 'sans-serif-light', marginTop: 15, color: 'white'
                                }}>Female</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.textinput}
                                placeholder="Date of Birth"
                                placeholderTextColor={'white'}
                                value={this.state.dob}
                                onChangeText={(dob) => { this.setState({ dob }) }}
                            />
                        </View>

                        {this.state.validation == '' ? null
                            :
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'blue', fontSize: 18 }}>{this.state.validation}</Text>

                            </View>
                        }
                        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.handleSignUp}>
                                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./ICONS/right_arrow.png')} style={{ width: 50, height: 50 }} />
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
    view: {
        width: 80, height: 80, borderRadius: 40, backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center',
    },
    textinput: {
        width: 300, height: 50, borderBottomWidth: 0.5,
        borderColor: 'white', fontSize: 20
    },
    textinput2: {
        width: 140, height: 50, borderBottomWidth: 0.5,
        borderColor: 'white', fontSize: 20
    }
})