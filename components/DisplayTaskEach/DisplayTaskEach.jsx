import React from 'react';
import {useDispatch} from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import { Rows, Cell } from 'react-native-table-component';
import { TouchableOpacity,StyleSheet, View, Text} from 'react-native';
import { DataTable } from 'react-native-paper';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function DisplayTasksEach({task}){
    //define dispatch
    const dispatch= useDispatch()
    //function triggers dispatch to complete a tasks
    const completeTask =()=>{
        //send id of the task to be completed
        dispatch({type:"COMPLETE_TASK", payload:task.id})
    }   //end completeTask
    //function triggers dispatch to delete a task
    const deleteThisTask=()=>{
        //send id of the task to be deleted
        dispatch({type:"DELETE_TASK", payload:task.id})
    }   //end deleteThisTask
    //format date for date_added. *This is needed for the java backend version
    const dateAddedFormat=()=>{
        //define formatted date_added
        let formattedDateAdded=''
        let thisDate= task.date_added
        // if there are no tasks or tasks haven't loaded yet
        if(!thisDate){
            formattedDateAdded=''
        }   //end if 
        //checks how long the string is. if it is too long slice it.
        //PYTHON version is already formatted response from the server and the length is 29
        else if(thisDate.length === 29 && thisDate[28] ==='T'){
            formattedDateAdded= thisDate.slice(0.16)
        }
        else {
            formattedDateAdded= thisDate.slice(0,10)
        }   //end else
        return formattedDateAdded;
    }
    //define formatteddate
    let formattedDate;
    //function to make timestamp look nicer
    const dateCompleteFormat=()=>{
        let completeDate=task.date_completed;
        if(!completeDate){
            formattedDate=''
        }
        else if(completeDate.length === 18){
            formattedDate=task.date_completed;
        }
        //if the task is completed give the formatted version of the completed time.
        else if(task.date_completed){
            formattedDate = task.date_completed.slice(0,16)
        }
        return <Text style={{width:"85%", fontSize:"14px", textDecorationStyle:"solid"}}>{formattedDate}</Text>;
    }   //end dateFormate
    //return a row of the task information
    return (
            <View>
            <DataTable.Row style={task.completed ? {width:"100%", padding:2, backgroundColor:"#F037A5",borderBottomWidth:"1px", borderBottomColor:"#1E3163"}:{width:"100%",padding:2,borderBottomWidth:"1px", borderBottomColor:"#1E3163"}}>
                <View style={task.completed ? {width:"25%", textDecoration:"line-through", justifyContent:"center"}: {width:"25%",justifyContent:"center"}}>
                    <Text style={{width:"85%", fontSize:"14px"}}>{task.task}</Text>
                </View>
                <DataTable.Cell style={task.completed ? {width:"28%%", textDecoration:"line-through"}: {width:"28%"}}>{dateAddedFormat()}</DataTable.Cell>
                <View style={{width:"32%",justifyContent:"center"}}>{task.completed ? dateCompleteFormat(): 
                    // <Button
                    //     onPress={completeTask}
                    //     title="Complete"
                    //     color="#F037A5"
                    //     accessibilityLabel="Complete a task"
                    // />
                    <TouchableOpacity onPress={completeTask} activeOpacity={0.95} style={styles.complete_button}>
                        <Text style={styles.complete_button_text}>Complete</Text>
                    </TouchableOpacity>
                    }

                </View>
                {/* <DataTable.Cell>{task.date_completed === null ? 'not yet completed' : dateCompleteFormat()}</DataTable.Cell> */}
                <DataTable.Cell style={{width:"15%", flex:.5}}><DeleteForeverIcon style={{margin:"10px"}} onClick={deleteThisTask} /> </DataTable.Cell>
            </DataTable.Row>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        width:"100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      complete_button: {
        flexDirection: 'row', 
        height: 35,
        width: "99%", 
        backgroundColor: "#1E3163",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom:"auto",
        borderRadius: 8,
        elevation:3,
    },
      complete_button_text: {
        padding:8,
        fontSize: 12,
        color: "#F8F8F8",
    }
});

export default DisplayTasksEach;
