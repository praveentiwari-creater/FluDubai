import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Animated, FlatList, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class LeaderBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayData:[{},{},{}],
            arrayData1:[{},{},{}],

        }

    }

    componentDidMount = () => {

        firestore()
            .collection('Users')
            .doc('Z9ZAbDVKeWBoEoohKzqh')
            .get().then(snapShot => {
                console.log('testing firestore',snapShot._data.manage1[0].name)

                  this.setState({arrayData:snapShot._data.manage1})
                  this.setState({arrayData1:snapShot._data.manage2})

            })

        // let data=snapShot._data.manage1
        //  for(let i=0;i<snapShot._data.manage1.length;i++){
        //     data=snapShot._data.manage1
        //     this.setState({arrayData:data})
        //  }
        //   console.log('testing firestore',user._data.manage1[0])


        // firestore()
        // .collection('Users')
        // .doc('Z9ZAbDVKeWBoEoohKzqh')
        // .set({
        //     manage1: [
        //         { rank: 1, name: "Manvendra Si.", steps: 22,
        //          uri:'https://www.liberaldictionary.com/wp-content/uploads/2018/12/men-1.jpg' },

        //         { rank: 2, name: "Nakul Sharma.", steps: 130,
        //          uri:'https://i.dmarge.com/2020/01/chris-airport.jpg' },

        //         { rank: 3, name: "Manoj Ku.", steps: 212,
        //          uri:'https://vistapointe.net/images/man-wallpaper-19.jpg' },

        //     ],
        //     manage2: [
        //         { rank: 4, name: "Divyanshu Dayal.", steps: 524, uri:
        //         'https://i.dmarge.com/2016/05/harry-hair.jpg' },
        //         { rank: 5, name: "Jay Rajput.", steps: 713,
        //          uri:'https://assets.ajio.com/medias/sys_master/root/h2b/h00/15896802459678/-473Wx593H-461125151-black-MODEL.jpg'},
        //         { rank: 6, name: "Rohit Sharma.", steps: 907,
        //          uri:'https://cdn-0.pickytop.com/wp-content/uploads/2020/05/Chris-Evans.jpg'},

        //     ],
        // })
        // .then(() => {
        //   console.log('User added!');
        // });
    }
    render() {
         console.log('testing state  ==>',this.state.arrayData[1].uri);
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginTop: 8, width: 60, height: 60, borderRadius: 30 }}>
                        <Image source={{uri:this.state.arrayData[0].uri}} style={{ width: 60, height: 60, borderRadius: 30 }} />
                        <Animated.View style={{ bottom: 40, left: 45 }}>
                            <View style={styles.dot}>
                                <Text style={{ color: 'white' }}>{this.state.arrayData[0].rank}</Text>
                            </View>
                        </Animated.View>
                    </View>
                    <Text style={{ fontSize: 16, margintt: 5 }}>ME</Text>
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ width: "33%", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('./ICONS/drop_down.png')} style={{ width: 10, height: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 28 }}>55</Text>
                        <Text style={{ fontSize: 12 }}>CHANGE</Text>
                    </View>
                    <View style={{ width: "33%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 28 }}>{this.state.arrayData[0].rank}</Text>
                        <Text style={{ fontSize: 12 }}>RANK</Text>
                    </View>
                    <View style={{ width: "33%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 28 }}>{this.state.arrayData[0].steps}</Text>
                        <Text style={{ fontSize: 12 }}>STEPS</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ width: "33%", justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginTop: 14, width: 60, height: 60, borderRadius: 30 }}>
                            <Image source={{uri:this.state.arrayData[1].uri}} style={{ width: 60, height: 60, borderRadius: 30 }} />
                            <Animated.View style={{ bottom: 40, left: 50 }}>
                                <View style={styles.dot}>
                                    <Text style={{ color: 'white' }}>{this.state.arrayData[1].rank}</Text>
                                </View>
                            </Animated.View>

                        </View>
                        <Text style={{ fontSize: 14 }}>{this.state.arrayData[1].name}</Text>
                        <Text style={{ fontSize: 18 }}>{this.state.arrayData[1].steps}</Text>
                        <Text style={{ fontSize: 12 }}>STEPS</Text>
                    </View>

                    <View style={{ width: "33%", justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginTop: 14, width: 80, height: 80, borderRadius: 40 }}>
                            <Image source={{uri:this.state.arrayData[0].uri}} style={{ width: 80, height: 80, borderRadius: 40 }} />
                            <Animated.View style={{ bottom: 50, left: 70 }}>
                                <View style={styles.dot}>
                                    <Text style={{ color: 'white' }}>{this.state.arrayData[0].rank}</Text>
                                </View>
                            </Animated.View>
                        </View>
                        <Text style={{ fontSize: 14 }}>{this.state.arrayData[0].name}</Text>
                        <Text style={{ fontSize: 18 }}>{this.state.arrayData[0].steps}</Text>
                        <Text style={{ fontSize: 12 }}>STEPS</Text>
                    </View>

                    <View style={{ width: "33%", justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginTop: 14, width: 60, height: 60, borderRadius: 30 }}>
                            <Image source={{uri:this.state.arrayData[2].uri}} style={{ width: 60, height: 60, borderRadius: 30 }} />
                            <Animated.View style={{ bottom: 40, left: 50 }}>
                                <View style={styles.dot}>
                                    <Text style={{ color: 'white' }}>{this.state.arrayData[2].rank}</Text>
                                </View>
                            </Animated.View>
                        </View>
                        <Text style={{ fontSize: 14 }}>{this.state.arrayData[2].name}</Text>
                        <Text style={{ fontSize: 18 }}>{this.state.arrayData[2].steps}</Text>
                        <Text style={{ fontSize: 12 }}>STEPS</Text>
                    </View>

                </View>

                <FlatList
                    data={this.state.arrayData1}
                    renderItem={({ item, index }) => (

                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.2 }}>

                            <View style={{ width: "15%", justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 20 }}>{item.rank}</Text>
                            </View>

                            <View style={{ width: "15%", justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ marginTop: 14, width: 40, height: 40, borderRadius: 20 }}>
                                    <Image source={{uri:item.uri}} style={{ width: 40, height: 40, borderRadius: 20 }} />
                                </View>
                            </View>

                            <View style={{ width: "45%", justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                            </View>

                            <View style={{ width: "25%", justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 20, color: 'red' }}>{item.steps}</Text>
                                <Text style={{ fontSize: 13 }}>STEPS</Text>
                            </View>

                        </View>

                    )}
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ff4d4d',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white'
    }
})
