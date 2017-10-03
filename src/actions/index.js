// **** firebase version *****
//added two constants SIGNED_IN and SET_REMINDERS
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, SIGNED_IN, SET_NEW_REMINDERS } from "../constant";


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


// **** firebase version *****
//new version add extra things for firebase

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
    };
    return action;
}

export function setNewReminders(newReminders){
    const action = {
        type: SET_NEW_REMINDERS,
        newReminders
    };
    return action;
}


