import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReservationService from './ReservationService';


class TableRow extends Component {

  constructor(props) {
    super(props);
    this.reservationService = new ReservationService();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.reservationService.deleteReservationById(this.props.obj._id);
    //Making another get request to get newest collection from MongoDB
    this.props.getAllDataCB();
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          {this.props.obj.hotelName}
        </td>
        <td>
          {this.props.obj.arrivalDate}
        </td>
        <td>
          {this.props.obj.departureDate}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Delete" className="btn btn-danger"/>
          </form>
        </td>
      </tr>
    );
  }
}

export default TableRow;
