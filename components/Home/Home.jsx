import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import {  SafeAreaView, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import AddTask from '../AddTask/AddTask';
import DisplayTasks from '../DisplayTask/DisplayTask';
import Title from '../Title/Title';


export default function Home(){
    //define dispatch
    const dispatch=useDispatch()
    //get tasks from the store
    const tasks= useSelector((store)=>{return store.list})
    //to load the tasks from the database
    useEffect(()=>
        dispatch({type:'FETCH_TASKS'})
        ,[]);
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
            <Title />
            <AddTask />
            <DisplayTasks tasks={tasks}/>
            </ScrollView>
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
      scrollview:{
          height:"100%",
          width:"100%",
      }
});