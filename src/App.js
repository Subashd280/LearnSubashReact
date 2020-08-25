import React, { Component } from "react";
import {Button,TextField} from '@material-ui/core';
import DatePicker from 'react-datepicker'
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
       FirstName : "",
       LastName : "",
       startDate: new Date()
    };
  }

  handleFirstName = (event) => {
     event.preventDefault()
    //  console.log(event.target.value)
     this.setState ({
        FirstName : event.target.value
       }) 
  }

  handleLastName = (event) => {
     event.preventDefault()
     this.setState({
       LastName : event.target.value
     })
  }

  handleTimeChange = (date) => {
      this.setState({
        startDate : date
      })
  }

  handleSubmit = (event) => {
     event.preventDefault();
     const data= this.state;
     console.log(data)
  }
  render() {
    const {FirstName,LastName} = this.state
    return(
     <form onSubmit={this.handleSubmit}>
      <div>
      <TextField 
      type='text'
      variant="standard" 
      placeholder="FirstName"
      value = {FirstName}
      onChange={this.handleFirstName}
      />
    </div>
    <div>
     <TextField
     type = "text"
     variant = "standard"
     placeholder = "LastName"
     value = {LastName}
     onChange = {this.handleLastName}
     />
      </div>
    <div><br/>
     <DatePicker
     timeCaption = "time"
     showYearDropdown
     showTimeSelect
     showMonthDropdown
     dateFormat="MMMM d, yyyy HH:mm:ss aa"
     selected = {this.state.startDate}
     onChange= { this.handleTimeChange} />
      </div>
    <Button type="Submit" color="primary">Submit</Button>
    </form>
    ) ;
  }
}

export default App;
