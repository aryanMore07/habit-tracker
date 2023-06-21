import { createContext, useReducer } from "react";

export const HabitContext = createContext();

const  reducerFunction = (state, action) => {
    switch (action.type) {
        case 'ADD_HABIT':
            return {
                ...state,
                habitData: [...state.habitData, action.payload]
            }
        case 'DELETE_HABIT': 
            return {
                ...state,
                deletedHabits: [...state.deletedHabits, state.habitData.find(({id}) => id === action.payload)],
                habitData: state.habitData.filter(({id}) => id !== action.payload)
            }
        case 'ARCHIVE_HABIT': 
            return {
                ...state,
                archiveHabits: [...state.archiveHabits, state.habitData.find((habit) => habit.id === action.payload)],
                habitData: state.habitData.filter((habit) => habit.id !== action.payload),
            }
        case 'REMOVE_FROM_ARCHIVE_HABIT': 
            return {
                ...state,
                habitData: [...state.habitData, state.archieveHabits.find((habit) => habit.id === action.payload)],
                archiveHabits: state.archiveHabits.filter(({id}) => id !== action.payload),
            }
    
        default:
            return state
    }
}

export const HabitProvider = ({children}) => {



    const [state, dispatch] = useReducer(reducerFunction, {
        habitData: [{
            id: '007',
            habitName: 'Daily Gym',
            repitations: 'Daily',
            goal: 'Lose weight',
            timeOfDay: 'Morning',
            startDate: 'Tomorrow'
        }],
        archiveHabits: [],
        deletedHabits: [],
    })

    console.log(state.deletedHabits);


    console.log(state.habitData);
    return <HabitContext.Provider value={{state, dispatch}}>{children}</HabitContext.Provider>
}