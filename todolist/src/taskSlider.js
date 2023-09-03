import { createSlice } from '@reduxjs/toolkit'
export const tastSlider = createSlice({
 name: 'task',
 initialState: {
   taskList:   [
     { id: 1, content: "Hit the gym" },
     { id: 2, content: "Meet George"}
   ]
 },
 reducers: {
   addTask: (state, action) => {
     let newTaskList = {
       id: Math.random(),
       content: action.payload.newContent
     }
     state.taskList.push(newTaskList);
   },
   deleteTask: (state, action) => {
     let { taskList } = state;
     state.taskList = taskList.filter((item) => 
         item.id !==action.payload.id);
   },
   editTask: (state, action) => {
     let { taskList } = state;
     state.todoList = taskList.map((item) => 
       item.id === action.payload.id ? action.payload : item);
   }
  },
})
// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = taskSlider.actions
export default taskSlider.reducer;