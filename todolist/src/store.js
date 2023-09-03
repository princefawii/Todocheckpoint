import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskSlider';

export default configureStore({
  reducer: {    task: taskReducer
    ,
}
})