import React from 'react'
import {  SafeAreaView, StyleSheet, TextInput } from 'react-native'

export default function AddTask(){
    const [text,onChangeText] = React.useState("Please add a task");

    return(
        <SafeAreaView> 
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
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