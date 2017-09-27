import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constant";


//tu stworzylismy action creator function
export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text: text, //we can use shorthand and tape only text
        dueDate
    };
    console.log('action creator in addReminder', action);
    return action;
};

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    console.log('deleting in action', action);
    return action;
};

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS,
    }
};



