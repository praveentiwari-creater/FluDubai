import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData:[{},{},{},{}],
            }
    }
    componentDidMount=()=>{

        firestore()
        .collection('Users')
        .doc('zV6NoE6GcQHOQrgJBxo3')
        .get().then(snapShot => {
            console.log('testing firestore',snapShot._data.manage[0].text1)

              this.setState({arrayData:snapShot._data.manage})
             

        })

       
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <FlatList
                data={this.state.arrayData}
                renderItem={({item})=>(

                    <View style={{ alignItems: 'center', marginTop: 7 }}>
                    <View style={styles.view}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5, marginLeft: 10 }}>
                            {item.text1}</Text>
                        <Text style={{ fontSize: 11, marginLeft: 10, color: 'grey' }}>{item.text2}</Text>
                        <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 5 }}>{item.text3}</Text>
                        <Text style={{ fontSize: 11, marginLeft: 10 }}>{item.text4}</Text>
                       
                        {item.image !=null ?
                        <View>
                            <Image source={{uri:item.image}} style={{ height: 130,width: '99.1%',marginTop:4 }} />
                        </View>
                        :
                        null
                        }

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <View>
                                <Image source={{uri:item.logo1}} style={{
                                    width: 20,
                                    height: 20, marginLeft: 20, marginBottom: 10
                                }} />
                            </View>
                            <View>
                                <Image source={{uri:item.logo2}} style={{
                                    width: 20, height: 20,
                                    marginRight: 20, marginBottom: 10
                                }} />
                            </View>

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
        width: '99.1%',
        // height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth:0.5
    },
  
})
