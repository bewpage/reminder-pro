import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constant";
import { bake_cookie, read_cookie } from 'sfcookies';

import reminder from './reducer_reminder';
import removeById from './reducer_removebyid';
import user from './reducer_user';



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