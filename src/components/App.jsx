import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; //we not using it now
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: '',
        dueDate: ''
    }
  }

    componentDidMount(){
        this.renderAlert();
    }

    componentDidUpdate(){
        this.renderAlert();
    }

    addReminder = (event) => {
        event.preventDefault();
        this.props.addReminder(this.state.text, this.state.dueDate);
        console.log('this is this.props.addReminder', this.props.addReminder);
        console.log('this is state of dueDate', this.state.dueDate);
    };




    deleteReminder = (id) => {
        this.props.deleteReminder(id);
    };


    handleAnyInputChange = (event, nameInState) => {
      this.setState({
          [nameInState]: event.target.value,
      });
    };

    renderReminders(){
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
                                {/*<div>{reminder.dueDate}</div>*/}
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

    renderAlert(){
        let reminders = this.props.reminders;
        console.log('render alert', reminders);
        reminders.map(date => {
            let id = date.id;
            let reminderDate = date.dueDate;
            let liElement = ReactDOM.findDOMNode(this.refs[id]);
            console.log('liElement', liElement);
            if(moment().isSameOrBefore(reminderDate)){
                return liElement.setAttribute('class', 'list-group-item green');
            }
            else{
                return liElement.setAttribute('class', 'list-group-item alert');
            }
        });
    }

    sortByDate(e){
        // const reminders = this.props.reminders;
        // console.log('old reminders', reminders);
        const newReminders = [].concat(e).sort((a, b) => moment.utc(a.dueDate).diff(moment.utc(b.dueDate)));
        console.log('sorted newReminders', newReminders);
        return newReminders;
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
          { this.renderReminders() }
          <div className='btn btn-danger'
               onClick={() => this.props.clearReminders()}
          >Clear All Reminders</div>
      </div>

    );
  }
}

//we can avoid this now
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addReminder}, dispatch);
// }

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps,{addReminder, deleteReminder, clearReminders})(App);
