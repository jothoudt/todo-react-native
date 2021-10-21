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
        fontWeight:700,
        color: "#F8F8F8",
        marginTop: "auto",
        marginBottom: "auto",
        textShadow: `0px 0px 0 rgb(167,167,167),
                 1px 1px 0 rgb(135,135,135),
                 2px 2px 0 rgb(104,104,104),
                 3px 3px  0 rgb(73,73,73),
                 4px 4px 3px rgba(0,0,0,0.59),
                 4px 4px 1px rgba(0,0,0,0.5),
                 0px 0px 3px rgba(0,0,0,.2);`
      },
});