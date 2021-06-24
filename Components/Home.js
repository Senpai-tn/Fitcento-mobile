import React from 'react'
import { View, Text, StatusBar, Button } from 'react-native'
import Landing from './Landing'
import NavBar from './NavBar'

const Home = ({ navigation }) => {
    return (
        <View>
            <StatusBar barStyle="auto" ></StatusBar>
            <NavBar navigation={navigation}></NavBar>
            <Landing></Landing>

        </View>
    )
}

export default Home
