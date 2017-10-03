import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import moment from 'moment';



class RemindersList extends Component{

    componentDidMount(){
        this.renderAlert();
    }

    componentDidUpdate(){
        this.renderAlert();
    }

    deleteReminder = (id) => {
        this.props.deleteReminder(id);
    };


    renderAlert(){
        let reminders = this.props.reminders;

        reminders.map(date => {
            let id = date.id;
            let reminderDate = date.dueDate;
            let liElement = ReactDOM.findDOMNode(this.refs[id]);
            if(moment().isSameOrBefore(reminderDate)){
                return liElement.setAttribute('class', 'list-group-item green');
            }
            else{
                return liElement.setAttribute('class', 'list-group-item alert');
            }
        });
    }

    sortByDate(e){
        const newReminders = [].concat(e).sort((a, b) => moment.utc(a.dueDate).diff(moment.utc(b.dueDate)));
        return newReminders;
    };

    render(){
        const reminders = this.props.reminders;
        const newReminders = this.sortByDate(reminders);
        return(
            <ul className='list-group col-sm-4'>
                {
                    newReminders.map(reminder => {
                        return (
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
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log('state in reminders list', state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps,{ addReminder })(RemindersList);