import { createContext, useReducer } from "react";

export const HabitContext = createContext();

const  reducerFunction = (state, action) => {
    switch (action.type) {
        case 'ADD_HABIT':
            return {
                ...state,
                habitData: [...state.habitData, action.payload]
            }
    
        default:
            return state
    }
}

export const HabitProvider = ({children}) => {



    const [state, dispatch] = useReducer(reducerFunction, {
        habitData: [],
        archieveHabits: [],
        deletedHabits: [],
    })


    console.log(state.habitData);
    return <HabitContext.Provider value={{state, dispatch}}>{children}</HabitContext.Provider>
}