import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constant";
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    let {text, dueDate} = action; //this is jsx, normally in return should be action.text and action.dueDate
    return {
        id: Math.random(),
        text,
        dueDate
    }
};

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reducer reminders', reminders);
    return reminders;
};


const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    console.log('cookie in reminder reducer', state);
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            console.log('reminders as state in reducer', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminders;