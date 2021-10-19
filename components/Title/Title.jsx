import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';

export default function Title(){
    return(
        <SafeAreaView style={styles.title_container}>
            <Text style={styles.text}>
                To-Do List
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title_container: {
        height:100,
        width: "100%",
        backgroundColor:"#1E3163",
        borderBottomWidth: 5,
        borderBottomColor:"#F037A5",
        marginBottom: 25,
        alignItems: 'center',    
    },
    text: {
        fontSize: 36,
        color: "#F8F8F8",
        marginTop: "auto",
        marginBottom: "auto",
      },
});