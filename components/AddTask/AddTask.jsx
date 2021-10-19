import React from 'react'
import { useDispatch } from 'react-redux';
import {  SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'

export default function AddTask(){
    const [task,onChangeTask] = React.useState("Please add a task");
    const dispatch = useDispatch()
    const addTask=()=>{
        dispatch({type:'ADD_NEW_TASK', payload:{task: task}})
        alert('task added')
    }

    return(
        <SafeAreaView> 
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
        </SafeAreaView>
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