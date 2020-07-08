import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, ScrollView ,Animated} from 'react-native'
import Header_Component from './Header_Component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';

export default class Profile_Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            show2: false,
            firstname: '',
            lastname: '',
            city: '',
            counrty: '',
            height: '',
            mezor:'',
            weight: '',
            gender: '',
            dob: '',
            uri:'',
            touch: false,
            COLOR1: '#ff4d4d',
            textCOLOR1: 'black',
            COLOR2: '#ff4d4d',
            textCOLOR2: 'black',
        }
    }

    componentDidMount = async () => {
        const user = await firestore()
            .collection('Users')
            .doc('0yM2vI7veCsvW7rrUSW7')
            .get();
        this.setState({
            firstname: user._data.FirstName,
            lastname: user._data.LastName,
            city: user._data.City,
            counrty: user._data.Country,
            height: user._data.Height,
            weight: user._data.Weight,
            gender: user._data.Gender,
            dob: user._data.DOB,
            uri:user._data.Uri,
            mezor:user._data.Measurement
        })
        if (this.state.gender == 'Male') {
            this.setState({ show1: true })
        }
        else {
            this.setState({ show2: true })
        }
        console.log('checking', user._data)
    }

    edit = () => {
        this.setState({
            show1: false,
            show2: false,
            firstname: '',
            lastname: '',
            city: '',
            counrty: '',
            height: '',
            mezor:'',
            weight: '',
            gender: '',
            dob: '',
           
        })
    }

    save=()=>{
        firestore()
  .collection('Users')
  .doc('0yM2vI7veCsvW7rrUSW7')
  .update({
    FirstName:this.state.firstname,
    LastName:this.state.lastname,
    City:this.state.city,
    Country:this.state.counrty,
    Height:this.state.height+" "+this.state.mezor,
    Weight:this.state.weight,
    Gender:this.state.gender,
    DOB:this.state.dob,
    Uri:this.state.uri,
    Measurement:this.state.mezor
    
  })
  .then(() => {
    alert('User updated!');
  });
    }

    
    login = () => {
        this.setState({
            COLOR1: 'black', textCOLOR1: '#ff4d4d',
            COLOR2: '#ff4d4d', textCOLOR2: 'black',
            mezor:'Feet',touch:false
        })
    }

    register = () => {
        this.setState({
            COLOR2: 'black', textCOLOR2: '#ff4d4d',
            COLOR1: '#ff4d4d', textCOLOR1: 'black',
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
                uri:source.uri,
              });
            }
          });
    }

    render() {
       console.log("add state",this.state.height,this.state.mezor) 
        return (
            <View style={{ flex: 1 }}>
                <Header_Component source={require('./ICONS/menu_white.png')} text={"PROFILE"} width={30} height={30}
                    width1={'35%'} width2={'65%'} backgroundColor={'#ff4d4d'} color={'white'} />
                <ScrollView>
                    <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.view}>
                            <Image source={{uri:this.state.uri}} style={{ width: 120, height: 120, borderRadius: 60 }} />
                        </View>
                        <TouchableOpacity onPress={this.image}>
                            <Text style={{ fontSize: 20, color: '#ff4d4d', fontWeight: 'bold', marginTop: 5 }}>
                                Edit photo</Text>
                        </TouchableOpacity>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <View>
                                <TextInput
                                    style={styles.textinput2}
                                    placeholder="First Name"
                                    value={this.state.firstname}
                                    onChangeText={(firstname)=>this.setState({firstname})}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChangeText={(lastname)=>this.setState({lastname})}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TextInput
                                    style={styles.textinput2}
                                    placeholder="City"
                                    value={this.state.city}
                                    onChangeText={(city)=>this.setState({city})}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Country"
                                    value={this.state.counrty}
                                    onChangeText={(counrty)=>this.setState({counrty})}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { width: 102 }]}
                                    placeholder="Height"
                                    value={this.state.height+"  "+this.state.mezor}
                                    onChangeText={(height) => { this.setState({ height }) }}

                                />
                            </View>

                            <View style={{ borderBottomWidth: 0.5, }}>
                                <View style={{ width: 36 }}>
                                    <TouchableOpacity onPress={() => this.setState({ touch: !this.state.touch })}>
                                        {this.state.touch == false ?

                                            <Image source={require('./ICONS/up_black.png')} 
                                            style={{ width: 20, height: 20, marginTop: 22 }} />
                                            :
                                            <Image source={require('./ICONS/down_black.png')} 
                                            style={{ width: 20, height: 20, marginTop: 22 }} />
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
                                                <Text style={{ fontSize: 19, color: this.state.textCOLOR1 }}>
                                                    Feet</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            width: 70, height: 30, backgroundColor: this.state.COLOR2,
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <TouchableOpacity onPress={this.register}>
                                                <Text style={{ fontSize: 19, color: this.state.textCOLOR2 }}>
                                                    Inch</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Animated.View>
                                }

                            </View>

                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Weight"
                                    value={this.state.weight}
                                    onChangeText={(weight) => { this.setState({ weight }) }}
                                />
                            </View>
                        </View>

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TextInput
                                    style={styles.textinput2}
                                    placeholder="Height"
                                    value={this.state.height}
                                    onChangeText={(height)=>this.setState({height})}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={[styles.textinput2, { marginLeft: 20 }]}
                                    placeholder="Weight"
                                    value={this.state.weight}
                                    onChangeText={(weight)=>this.setState({weight})}
                                />
                            </View>
                        </View> */}


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row' ,marginLeft:10}}>
                                <TouchableOpacity onPress={() => this.setState({show1:true,show2:false,gender:'Male'})}>
                                    <View style={{
                                        width: 20, height: 20, borderRadius: 10,
                                        backgroundColor: this.state.show1 == true ? '#ff4d4d' : 'black', marginTop: 20
                                    }}>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 21, marginLeft: 10, marginRight: 86,
                                    fontFamily: 'sans-serif-light', marginTop: 15,
                                }}>Male</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginLeft:10 }}>
                                <TouchableOpacity onPress={() => this.setState({ show2: true, show1: false,gender:'Female' })}>
                                    <View style={{
                                        width: 20, height: 20, borderRadius: 10,
                                        backgroundColor: this.state.show2 == true ? '#ff4d4d' : 'black', marginTop: 20
                                    }}>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 21, marginLeft: 10, marginRight: 35,
                                    fontFamily: 'sans-serif-light', marginTop: 15,
                                }}>Female</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.textinput}
                                placeholder="Date of Birth"
                                value={this.state.dob}
                                onChangeText={(dob)=>this.setState({dob})}
                            />
                        </View>

                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={[styles.button,{marginRight:20}]}>
                                <TouchableOpacity onPress={this.edit}>
                                    <Text style={{ textAlign:'center',fontSize:30,marginTop:5,color:'white'}}>Edit</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.button,{marginLeft:20}]}>
                                <TouchableOpacity onPress={this.save}>
                                    <Text style={{textAlign:'center',fontSize:30,marginTop:5,color:'white'}}>Save</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {
        width: 120, height: 120, borderRadius: 60,
        alignItems: 'center', justifyContent: 'center',
    },
    textinput: {
        width: 315, height: 60, borderBottomWidth: 0.5,
        fontSize: 20
    },
    textinput2: {
        width: 150, height: 60, borderBottomWidth: 0.5,
        fontSize: 20
    },
    button: {
        width: 135, height: 55, borderRadius: 6, backgroundColor: '#ff4d4d', marginTop: 20
    }
})
