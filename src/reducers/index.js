import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";



const Reducers = combineReducers({
    course: courseReducer
})

export default Reducers