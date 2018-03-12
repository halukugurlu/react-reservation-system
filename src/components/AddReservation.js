import React, {Component} from 'react';
import ReservationService from './ReservationService';

class AddReservation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: '',
        hotelName: '',
        arrivalDate: '',
        departureDate: ''
      },
    };

    this.reservationService = new ReservationService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(newPartialInput) {
    this.setState(state => ({...state, input: {...state.input, ...newPartialInput}}));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.info('this.state.input', this.state.input);
    this.reservationService.setNewReservation(this.state.input);
    this.props.history.push('/index');
  }

  render() {
    //input pointer for better readability
    const {input} = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

          <label>
            Name:
            <input type="text"
                   value={input.name}
                   onChange={e => this.handleInputChange({name: e.target.value})}
                   className="form-control"/>
          </label>

          <br/>

          <label>
            Hotel Name:
            <input type="text"
                   value={input.hotelName}
                   onChange={e => this.handleInputChange({hotelName: e.target.value})}
                   className="form-control"/>
          </label>

          <br/>
          <label>
            Arrival Date:
            <input type="date"
                   value={input.arrivalDate}
                   onChange={e => this.handleInputChange({arrivalDate: e.target.value})}
                   className="form-control"/>
          </label>

          <br/>

          <label>
            Departure Date:
            <input type="date"
                   value={input.departureDate}
                   onChange={e => this.handleInputChange({departureDate: e.target.value})}
                   className="form-control"/>
          </label>

          <br/>

          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default AddReservation;
