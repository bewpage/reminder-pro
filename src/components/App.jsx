import React, { Component, } from 'react';
import RemindersList from './RemindersList';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: '',
        dueDate: ''
    }
  }

    addReminder = (event) => {
        event.preventDefault();
        this.props.addReminder(this.state.text, this.state.dueDate);
    };


    handleAnyInputChange = (event, nameInState) => {
      this.setState({
          [nameInState]: event.target.value,
      });
    };


  render() {
    return (
      <div className="App">
          <div className='title'>Reminder Pro</div>
        <div className='form-inline reminder-form'>
          <div className='form-group'>
            <input type="text"
                   className='form-control'
                   placeholder='I have to ...'
                   onChange={event => this.handleAnyInputChange(event, 'text')}
            />
              <input type="datetime-local"
                     className='form-control'
                     onChange={event => this.handleAnyInputChange(event, 'dueDate')}
              />
          </div>
          <button type='button'
                  className='btn btn-success'
                  onClick={this.addReminder}
          >Add Reminder</button>
        </div>
            <RemindersList />
          <div className='btn btn-danger'
               onClick={() => this.props.clearReminders()}
          >Clear All Reminders</div>
      </div>

    );
  }
}


function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps,{addReminder, deleteReminder, clearReminders})(App);
