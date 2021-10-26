import React from 'react'
import { useDispatch } from 'react-redux';
import {StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

export default function AddTask(){
    //use state variable
    const [task,onChangeTask] = React.useState('');
    //define dispatch
    const dispatch = useDispatch()
    //function to add task
    const addTask=()=>{
        //alert if there is no task to disallow empty tasks being added to the list
        if(task === ''){
            alert('Please add a task')
        } //end if
        //otherwise dispatch and alert that the task has been added
        else{
            dispatch({type:'ADD_NEW_TASK', payload:{task: task}})
            alert('task added')
        } //end else
        
    }   //end addTask

    return(
        <View> 
            <TextInput
                style={styles.input}
                onChangeText={onChangeTask}
                value={task}
                placeholder='Please add a task'
            />
            <TouchableOpacity onPress={addTask} activeOpacity={0.95} style={styles.button}>
                <Text style={styles.button_text}>Add Task</Text>
            </TouchableOpacity>
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
        borderRadius: 16,
    },
    button: {
        flexDirection: 'row', 
        height: 35,
        width: 120, 
        backgroundColor: "#F037A5",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        borderRadius: 16,
        elevation: 3,
    },
    button_text: {
        fontSize: 16,
        color: "#F8F8F8",
        fontWeight: "bold",
    }
});