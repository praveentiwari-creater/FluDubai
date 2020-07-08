import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Header_Component from './Header_Component';

export default class Cart_Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show1: false,
            ind: null,
            data: [
                {
                    data1: {
                        id: 0,
                        isShow: false,
                        image1: require('./ICONS/car1.jpg'), text1: "up to 70% off",
                        text2: "Householder Needs", text3: 'personal goods',
                        image2: require('./ICONS/down.png'), image3: require('./ICONS/up.png'),

                    },

                    data2: {
                        image1: require('./ICONS/car1.jpg'), image2: require('./ICONS/car2.jpg'),
                        image3: require('./ICONS/car3.jpg'),
                    }
                },

                {
                    data1: {
                        id: 1,
                        isShow: false,
                        image1: require('./ICONS/image1.jpg'), text1: "up to 70% off",
                        text2: "Householder Needs", text3: 'personal goods',
                        image2: require('./ICONS/down.png'), image3: require('./ICONS/up.png'),
                    },

                    data2: {
                        image1: require('./ICONS/image1.jpg'), image2: require('./ICONS/image2.jpg'),
                        image3: require('./ICONS/image3.jpg'),
                    }
                },
                {
                    data1: {
                        id: 2,
                        isShow: false,
                        image1: require('./ICONS/image1.jpg'), text1: "up to 70% off",
                        text2: "Householder Needs", text3: 'personal goods',
                        image2: require('./ICONS/down.png'), image3: require('./ICONS/up.png'),
                    },

                    data2: {
                        image1: require('./ICONS/image1.jpg'), image2: require('./ICONS/image2.jpg'),
                        image3: require('./ICONS/image3.jpg'),
                    }
                },
                {
                    data1: {
                        id: 3,
                        isShow: false,
                        image1: require('./ICONS/car1.jpg'), text1: "up to 70% off",
                        text2: "Householder Needs", text3: 'personal goods',
                        image2: require('./ICONS/down.png'), image3: require('./ICONS/up.png'),

                    },

                    data2: {
                        image1: require('./ICONS/car1.jpg'), image2: require('./ICONS/car2.jpg'),
                        image3: require('./ICONS/car3.jpg'),
                    }
                },



            ]
        }
    }

    onActionClick = (test) => {
        let tempArray = this.state.data;
        console.log('tempArray', test)
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].data1.id == test.data1.id) {
                tempArray[i].data1.isShow = true
            }
            else
            {
                tempArray[i].data1.isShow = false  
            }
            
        }
        this.setState({ data: tempArray })
  
    }

    onActionClick1 = (test) => {
        let tempArray = this.state.data;
        console.log('tempArray', test)
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].data1.id == test.data1.id) {
                tempArray[i].data1.isShow = false
            }
                  
        }
        this.setState({ data: tempArray })
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'white'}}>
                <Header_Component backgroundColor={'#ff4d4d'} text={'Cart Design'} textAlign={'center'}
                 justifyContent1={'center'} color={'white'}/>
                <FlatList
                    data={this.state.data}
                    numColumns={1}
                    renderItem={({ item, index }) => (

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={[styles.view, { flexDirection: 'row' }]}>

                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                    <Image source={item.data1.image1} style={{
                                        width: 80, height: 100,
                                        marginTop: 20, marginBottom: 20, borderRadius: 10
                                    }} />
                                </View>

                                <View style={{ width: '43%' }}>
                                    <Text style={{ fontSize: 14, color: 'blue' }}>{item.data1.text1} </Text>
                                    <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> {item.data1.text2} </Text>
                                    <Text style={{ fontSize: 14, }}> {item.data1.text3} </Text>
                                </View>

                                <View style={{ width: '33%' }}>
                                    {item.data1.isShow == false ?
                                        <TouchableOpacity onPress={() => this.onActionClick(item)}>
                                            <Image source={item.data1.image2} style={{
                                                width: 40,
                                                height: 40, marginLeft: 30
                                            }} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => this.onActionClick1(item)}>
                                            <Image source={item.data1.image3} style={{
                                                width: 40,
                                                height: 40, marginLeft: 30
                                            }} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>


                            <View>
                                {/* null : */}
                                {/* {this.state.show == false ? */}
                                {/* {item.data1.id == this.state.ind ? */}
                                {item.data1.isShow == true ?

                                    <View style={styles.view1}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>

                                                <Image source={item.data2.image1} style={{
                                                    width: 80, height: 100,
                                                    marginTop: 20, marginBottom: 10, borderRadius: 10
                                                }} />

                                                <Text>Car 1</Text>
                                            </View>

                                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={item.data2.image2} style={{
                                                    width: 80, height: 100,
                                                    marginTop: 20, marginBottom: 10, borderRadius: 10
                                                }} />
                                                <Text style={{ textAlign: 'center' }}>Car 2</Text>
                                            </View>

                                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={item.data2.image3} style={{
                                                    width: 80, height: 100,
                                                    marginTop: 20, marginBottom: 10, borderRadius: 10
                                                }} />
                                                <Text>Car 3</Text>
                                            </View>

                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={item.data2.image3} style={{
                                                    width: 80, height: 100,
                                                    marginTop: 20, marginBottom: 10, borderRadius: 10
                                                }} />
                                                <Text style={{ textAlign: 'center' }}>Car 4</Text>
                                            </View>

                                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={item.data2.image2} style={{
                                                    width: 80, height: 100,
                                                    marginTop: 20, marginBottom: 10, borderRadius: 10
                                                }} />
                                                <Text style={{ textAlign: 'center' }}>Car 5</Text>
                                            </View>

                                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={item.data2.image1} style={{
                                                    width: 80, height: 100,
                                                    marginTop: 20, marginBottom: 10, borderRadius: 10
                                                }} />
                                                <Text style={{ textAlign: 'center' }}>Car 6</Text>
                                            </View>

                                        </View>
                                    </View>
                                    :
                                    null
                                }


                            </View>


                        </View>
                    )}
                // keyExtractor={item => item.id}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {

        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4d4d',
        borderRadius: 6,
        marginTop: 20
    },
    view1: {

        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,

    }
})