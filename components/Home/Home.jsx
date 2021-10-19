import React from 'react'
// import { useDispatch } from 'react-redux';
import {  SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'
import AddTask from '../AddTask/AddTask';
import Title from '../Title/Title';

export default function Home(){

    return(
        <SafeAreaView style={styles.container}> 
            <Title />
            <AddTask />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#000000"
      },
});