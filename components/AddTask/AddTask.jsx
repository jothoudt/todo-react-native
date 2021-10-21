import React from 'react'
import { useDispatch } from 'react-redux';
import {  SafeAreaView, StyleSheet, TextInput, Button,View } from 'react-native'

export default function AddTask(){
    //use state variable
    const [task,onChangeTask] = React.useState("Please add a task");
    //define dispatch
    const dispatch = useDispatch()
    //function to add task
    const addTask=()=>{
        dispatch({type:'ADD_NEW_TASK', payload:{task: task}})
        alert('task added')
    }   //end addTask

    return(
        <View> 
            <TextInput
                style={styles.input}
                onChangeText={onChangeTask}
                value={task}
            />
            <Button
                onPress={addTask}
                title="Add Task"
                color="#F037A5"
                accessibilityLabel="Submit a task"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        padding: 10,
    },
});