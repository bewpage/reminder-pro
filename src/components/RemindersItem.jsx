import React, { Component } from 'react';


class RemindersItem extends Component{
    render(){
        return(
            <li key={reminder.id} ref={reminder.id} className='list-group-item'>
                <div className='list-group delete-button'
                     onClick={()=>this.deleteReminder(reminder.id)}
                >&#x2715;</div>
                <div className='list-group'>
                    <div className='title-reminder'>{reminder.text}</div>
                    <div>{moment(reminder.dueDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
                    <div><em>{moment(reminder.dueDate).fromNow()}</em></div>
                </div>
            </li>
        )
    }
}


export default RemindersItem;