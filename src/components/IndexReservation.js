import React, {Component} from 'react';
import ReservationService from './ReservationService';
import TableRow from './TableRow';

class IndexReservation extends Component {

  constructor(props) {
    super(props);
    this.state = {reservations: []};
    this.reservationService = new ReservationService();
  }

  /*
     Since I am not using redux for data and/or state management
     I had to slow down a bit when getting data at all reservations.
     Data instance write in mongodb is a bit slow, needs to be handled atomic.
     A quick set time out solves the prob for this scale.
  */
  getAllData = () => {
    setTimeout(() => this.reservationService.getAllReservations()
      .then(response => {
        this.setState({reservations: response.data});
      })
      .catch(function (error) {
        console.log(error);
      }), 500);
  };

  componentDidMount() {
    this.getAllData();
  }

  tabRow() {
    const getAllDataCB = this.getAllData;
    if (this.state.reservations instanceof Array) {
      return this.state.reservations.map(function (object, i) {
        return <TableRow obj={object} key={i} getAllDataCB={getAllDataCB}/>;
      })
    }
  }

  render() {
    return (
      <div className="container">
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

export default IndexReservation;
