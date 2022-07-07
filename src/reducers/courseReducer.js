import { ActionTypes } from "../contants/action-type";

const initialState = [
    {
        id:0,
        name:"Node Js Tutorial",
        category:"web",
        price: 5000
    },
    {
        id:1,
        name:"Java Tutorial",
        category:"web",
        price: 10000
    }
]

export const courseReducer = (state = initialState , action) =>{
    switch(action.type){
        case ActionTypes.ADD_COURSE:
            state = [...state, action.payload];
            return state;
        case ActionTypes.EDIT_COURSE:
            const updateState = state.map((course)=> course.id === action.payload.id ? action.payload : course)
            state = updateState;
            return state; 
        case ActionTypes.DELETE_COURSE:
             const filterCourse = state.filter((course)=> course.id !== action.payload && course)   
             state = filterCourse;
             return state;   
        default: 
            return state;
    }
}

