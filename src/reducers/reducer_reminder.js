const reminder = (action) => {
    let {text, dueDate} = action; //this is jsx, normally in return should be action.text and action.dueDate
    return {
        id: Math.random(),
        text,
        dueDate
    }
};

export default reminder;