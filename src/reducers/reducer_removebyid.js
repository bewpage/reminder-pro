const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reducer reminders', reminders);
    return reminders;
};


export default removeById;