import React, {Component} from 'react';
import ReservationService from './ReservationService';
import TableRow from './TableRow';

//Error handler Higher order Component
import ErrorHandler from './ErrorHandler';

const DivWithErrorHandling = ErrorHandler(({children}) => <div>{children}</div>);

class SearchReservation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      showError: false,
      reservations: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reservationService = new ReservationService();
  }

  getReservationById = () => {
    setTimeout(() => this.reservationService.getReservationById(this.state.id)
      .then(response => {
        if (response.data) {
          this.setState({reservations: [response.data]});
          this.setState({showError: false});
        }
        else {
          this.setState({showError: true});
        }
      })
      .catch(function (error) {
        console.log(error);
      }), 500);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.getReservationById();
  }

  handleInputChange(event) {
    this.setState({id: event.target.value})
  }

  tabRow() {
    if (this.state.reservations instanceof Array) {
      return this.state.reservations.map(function (object, i) {
        return <TableRow obj={object} key={i}/>;
      })
    }
  }

  render() {
    return (
      <div className="container">

        <form onSubmit={this.handleSubmit}>
          <label>
            Reservation ID:
            <input type="text" value={this.state.id} onChange={this.handleInputChange} className="form-control"/>
          </label><br/>
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>

        <br/>
        <br/>
        <DivWithErrorHandling showError={this.state.showError}></DivWithErrorHandling>
        <br/>

        <table className="table table-striped">
          <thead>
          <tr>
            <td>Reservation ID</td>
            <td>Name</td>
            <td>Hotel Name</td>
            <td>Arrival Date</td>
            <td>Departure Date</td>
          </tr>
          </thead>
          <tbody>
          {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchReservation;
