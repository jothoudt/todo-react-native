import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {URI} from '@env';

const uri = URI;

function* listSaga(){
    yield takeEvery('FETCH_TASKS', fetchTasks);
    yield takeEvery('ADD_NEW_TASK', addTasks);
    yield takeEvery('COMPLETE_TASK', completeTask)
    yield takeEvery('DELETE_TASK', deleteTask)
}   //end listSaga
//POST---to add a task to the database
function* addTasks(action){
    try{
        console.log("in POST tasks", action.payload)
        yield axios.post(`${uri}/api/tasks/`, action.payload)
        //get updated task list after adding task
        yield put({type:'FETCH_TASKS'})
    }   //end try
    catch(error){
        console.log('error in POST task', error)
    }   //end catch
}   //end addTasks
//GET---to get tasks from the database
function* fetchTasks(){
    try{
        console.log('in GET tasks')
        const response= yield axios.get(`${uri}/api/tasks/`)
        console.log(response.data)
        //to store tasks in reducer
        yield put ({type:'SET_TASKS', payload:response.data})
    }   //end try
    catch(error){
        console.log('error in GET tasks', error)
    }   //end catch
}   //end fetchTasks
//PUT---to update a task to complete
function* completeTask(action){
    try{
        console.log('in Complete task',action.payload)
        yield axios.put(`${uri}/api/tasks/` + action.payload )
        //to fetch updated list of tasks after completing a task
        yield put({type:'FETCH_TASKS'})
    }   //end try
    catch(error){
        console.log('error in complete task', error)
    }   //end catch
}   //end completeTask
//DELETE---to delete a task from the database
function* deleteTask(action){
    console.log('in delete task')
    yield axios.delete(`${uri}/api/tasks/` + action.payload)
    //fetch updated task list after deleting task
    yield put({type:'FETCH_TASKS'})
}   //end deleteTask

export default listSaga;