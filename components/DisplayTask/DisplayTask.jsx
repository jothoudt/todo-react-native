import React from 'react'
import DisplayTasksEach from '../DisplayTaskEach/DisplayTaskEach';
import {StyleSheet,View, ScrollView, Text} from 'react-native';
import { DataTable } from 'react-native-paper';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

function DisplayTasks({tasks}){
    //function to conditionally render taks to prevent racing issues
    const displayAllTasks=()=>{
        //define display
        let display=''
        //if there are no tasks or the tasks have not loaded yet
        if(!tasks || tasks.length === 0){
            display= <Text>No tasks</Text>
        }
        //if there are tasks, map through them and display them as rows in the table
        else{
            display=
            <>
            {tasks.map((task, id)=>{
                return(
                    <DisplayTasksEach task={task} key={id} />
                )
            })}
            </>
        }
        return display;
    }
    //returns a table to display the tasks
    return(
        <View horizontal style={styles.container}>
            <DataTable style={{width:"99%", marginTop:25,borderWidth:1, borderColor:"#1E3163"}}>
                <DataTable.Header style={{width:"100%", margin:0, padding:5,backgroundColor:"#1E3163"}}>
                    <DataTable.Title style={{width:"25%"}}><Text style={{color:"#F8F8F8"}}>Task</Text></DataTable.Title>
                    <DataTable.Title style={{width:"28%", color:"#f8f8f8"}}><Text style={{color:"#F8F8F8"}}>Date Added</Text></DataTable.Title>
                    <DataTable.Title style={{width:"32%", color:"#f8f8f8"}}><Text style={{color:"#F8F8F8"}}>Completed</Text></DataTable.Title>
                    <DataTable.Title style={{flex:.5,width:"15%", color:"#f8f8f8"}}> <Text style={{color:"#F8F8F8"}}>Delete</Text></DataTable.Title>
                </DataTable.Header>
                <View>
                {displayAllTasks()}
                </View>
            </DataTable>
            
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        // height: 300,
        fontSize: 10,
        width:"100%",
        backgroundColor: '#F8F8F8',
        alignItems: "center",
        justifyContent: "center",
        color: "#000000",
      },
      table_text:{
          color:"#f8f8f8",
      }
});

export default DisplayTasks;