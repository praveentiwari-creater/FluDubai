import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import firestore from '@react-native-firebase/firestore';


const WIDTH = Dimensions.get('window').width;
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSlide: null,
            steps: [],
            arrayData:[{},{},{},{},{},{}]
        }
    }

    get pagination() {
        const { activeSlide,arrayData } = this.state;
        return (
            <Pagination
                dotsLength={arrayData.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ backgroundColor: 'white' }}
                dotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    // marginHorizontal:0.2,
                    backgroundColor: 'white',
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }


    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide} >
                <Image source={{uri:item.uri}} style={{ width: '100%', height: 190, borderRadius: 6 }} />
            </View>
        );
    }

   componentDidMount = () => {
        firestore()
            .collection('Users')
            .doc('prUdI0WnvQhjnhT5nUuB')
            .get()
            .then(documentSnapshot => {
                // console.log('User exists: ', documentSnapshot._data.Steps[0]);
                this.setState({steps:documentSnapshot._data.Steps})

            });
        firestore()
            .collection('Users')
            .doc('ho0gVCz61WrA1RIycnzS')
            .get()
            .then(documentSnapshot => {
                // console.log('User exists: ', documentSnapshot._data.Steps[0]);
                this.setState({arrayData:documentSnapshot._data.images})
                console.log(documentSnapshot._data.images[0].uri)

            });



            // .add({
            //    images:[
            //    {uri:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'},
            //    {uri:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg'},
            //    {uri:'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg'},
            //    {uri:'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-tracks-163518_960_720.jpg'},
            //    {uri:'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'},
            //    {uri:'https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_960_720.jpg'}
             
            
            // ]
            // })
            // .then(() => {
            //     console.log('User added!');
            // });

       
    }
    // Steps: [99, 999, 55, 88, 210]
    render() {
       
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white', height: '75%', }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <View style={{
                            width: 150, height: 150, borderRadius: 75, backgroundColor: '#ff4d4d',
                            alignItems: 'center', justifyContent: 'center'
                        }}>

                            <View style={{
                                width: 120, height: 120, borderRadius: 60, backgroundColor: 'white',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 18, color: '#ff4d4d' }}>STEPS</Text>
                                <Text style={{ fontSize: 25, color: 'black' }}>{this.state.steps[0]}</Text>
                            </View>
                        </View>
                    </View>



                    <View style={{ backgroundColor: 'white', marginTop: 20 }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.arrayData}
                            renderItem={this._renderItem}
                            sliderWidth={WIDTH}
                            itemWidth={WIDTH / 1.08}
                            layout={'default'}
                            autoplay
                            loop
                            inactiveSlideScale={0.95}
                            inactiveSlideOpacity={2}
                            activeSlideAlignment={'center'}
                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                        />
                    </View>
                    <Animated.View style={{ bottom: 90, right: 70 }}>
                        {this.pagination}
                    </Animated.View>



                </View>


                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', height: '25%',
                    backgroundColor: 'white'
                }}>
                    <View style={{ marginLeft: 16, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./ICONS/calendar1.png')} style={{ width: 25, height: 25 }} />
                        <Text style={{ marginTop: 5, fontSize: 25 }}>{this.state.steps[1]}</Text>
                        <Text style={{ marginTop: 5, color: 'grey' }}>Yesterday Steps</Text>

                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./ICONS/star.png')} style={{ width: 25, height: 25 }} />
                        <Text style={{ marginTop: 5, fontSize: 25 }}>{this.state.steps[2]}</Text>
                        <Text style={{ marginTop: 5, color: 'grey' }}>Best Single Day</Text>

                    </View>

                    <View style={{ marginRight: 16, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./ICONS/pan.png')} style={{ width: 25, height: 25 }} />
                        <Text style={{ marginTop: 5, fontSize: 25 }}>{this.state.steps[3]}</Text>
                        <Text style={{ marginTop: 5, color: 'grey' }}>Total Steps</Text>

                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    slide: {
        width: "100%",
        height: 190,
        // marginTop: 100
    },
    title: {
        width: 50,
        height: 50,

    }
})

