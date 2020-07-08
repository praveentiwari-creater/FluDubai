import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Animated, TouchableOpacity ,FlatList} from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData:[{},{},{}],
            }
    }

    componentDidMount=()=>{

        firestore()
            .collection('Users')
            .doc('c9DBp05yqBEgSOhdkiQT')
            .get().then(snapShot => {
                console.log('testing firestore',snapShot._data.manage[0].text)

                  this.setState({arrayData:snapShot._data.manage})
                 

            })

        //  firestore()
        // .collection('Users')
        // .doc('c9DBp05yqBEgSOhdkiQT')
        // .set({
        //     manage: [
        //         {
        //             text: "Male vs Female (Day 2)", uri:'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-tracks-163518_960_720.jpg',
        //             startTime: '2020-06-26   00:00:00', endTime: '2020-06-26    23:58:00'
        //         },
        //         {
        //             text: "Top Council (Day 1)", uri:'https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_960_720.jpg',
        //             startTime: '2020-06-26   00:00:00', endTime: '2020-06-26    23:58:00'
        //         },
        //         {
        //             text: "City Challenge (Day 1)", uri:'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg',
        //             startTime: '2020-06-26   00:00:00', endTime: '2020-06-26    23:58:00'
        //         }
        //         ]
        // })
        // .then(() => {
        //   console.log('User added!');
        // });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                data={this.state.arrayData}
                renderItem={({item})=>(
                   

<View style={{ alignItems: 'center', marginTop: 10 }}>
                    <View style={styles.view}>
                        <Image source={{uri:item.uri}} 
                        style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                   
                   
                        <View>
                    <Animated.View style={{ bottom: 185,left:20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.text}</Text>
                        <Text style={{ fontSize: 13 }}>Daily Challenge</Text>
                    </Animated.View>
                    </View>

                    <View>
                    <Animated.View style={{ bottom: 100 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ width: '50%' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                                    <View style={styles.button}>
                                        <TouchableOpacity>
                                            <Text style={{ color: 'white', fontSize: 16 }}>Start Time</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text>{item.startTime}</Text>
                                </View>
                            </View>

                            <View style={{ width: '50%' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                                    <View style={styles.button}>
                                        <TouchableOpacity>
                                            <Text style={{ color: 'white', fontSize: 16 }}>End Time</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text>{item.endTime}</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                    </View>
                   
                   
                    </View>
                   
                </View>

                   
                )}
                />
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {
        width: '96%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#ff4d4d',
        alignItems: 'center',
        justifyContent: 'center'
    }
})