import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login_Register from './Components/Login_Register'
import Login_Screen from './Components/Login_Screen'
import Register_Screen from './Components/Register_Screen'
import Profile_Screen from './Components/Profile_Screen'
import My_Device from './Components/My_Device'
import Choose_Your_Tracker from './Components/Choose_Your_Tracker';
import Dashboard from './Components/Dashboard';
import LeaderBoard from './Components/LeaderBoard';
import Challenges from './Components/Challenges';
import NewsFeed from './Components/NewsFeed';
import Header_Component from './Components/Header_Component';
import Cart_Design from './Components/Cart_Design';
import Forgate_Password from './Components/Forgate_Password';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: ''
    }
  }
  componentDidMount = () => {
    firestore()
      .collection('Users')
      .doc('0yM2vI7veCsvW7rrUSW7')
      .get().then(snapShot => {
         console.log('testing firestore',snapShot._data.Uri)
        this.setState({uri:snapShot._data.Uri})
      })
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: true
        }}>
          
    <Stack.Screen name="Login_Register" component={Login_Register} options={{ headerShown: false }} />
          <Stack.Screen name="Step_Up" component={TAB_NAVIGATION}
            options={{
              headerTitle: props => <Header_Component  borderRadius={20}
                width={40} height={40}
                text={'STEP UP'} source1={require('./Components/ICONS/three_dot.png')}
                justifyContent1={'space-between'} />,
              headerStyle: {
                backgroundColor: 'white',

                elevation: 0,
              },
              headerTintColor: 'powdergrey',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
      
          <Stack.Screen name="Register_Screen" component={Register_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile_Screen" component={Profile_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Forgate_Password" component={Forgate_Password} options={{ headerShown: false }} />
          <Stack.Screen name="Choose_Your_Tracker" component={Choose_Your_Tracker} options={{ headerShown: false }} />
          <Stack.Screen name="My_Device" component={My_Device} options={{ headerShown: false }} />
          <Stack.Screen name="Login_Screen" component={Login_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Cart_Design" component={Cart_Design} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
function TAB_NAVIGATION() {
  return (
    <Tab.Navigator
      //  tabBarComponent={ Header_Component}
      tabBarOptions={{
        labelStyle: { fontSize: 10 },
        tabStyle: { width: 100, height: 60 },
        style: { backgroundColor: '#ff4d4d' },
        scrollEnabled: true,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        pressColor: '#ff4d4d',
        showIcon: true,

        indicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 3,
        },
      }} >


      <Tab.Screen name="Dashboard" component={Dashboard} options={{
        tabBarLabel: 'Dashboard', tabBarIcon: ({ color }) => (
          <Icon name='grid' color={color} size={26} />
        )
      }} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} options={{
        tabBarLabel: 'LeaderBoard', tabBarIcon: ({ color }) => (
          <Icon name='bar-graph' color={color} size={26} />
        )
      }} />
      <Tab.Screen name="Challenges" component={Challenges} options={{
        tabBarLabel: 'Challenges', tabBarIcon: ({ color }) => (
          <Icon name='flag' color={color} size={26} />
        )
      }} />
      <Tab.Screen name="News Feed" component={NewsFeed} options={{
        tabBarLabel: 'News Feed', tabBarIcon: ({ color }) => (
          <Icon name='credit-card' color={color} size={26} />
        )
      }} />

    </Tab.Navigator>
  );
}