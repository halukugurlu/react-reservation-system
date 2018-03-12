import axios from 'axios';
//'http://localhost:4200/
let windowLocation = window.location.hostname === 'localhost' ?
  'http://localhost:4200':
  window.location.origin;


class ReservationService {



  getReservationById(id) {
    return axios.get(windowLocation + '/reservations/search/' + id)
      .catch(function (error) {
        console.log(error);
      })
  }

  getAllReservations() {
    return axios.get(windowLocation + '/reservations')
      .catch(function (error) {
        console.log(error);
      })
  }

  setNewReservation(data) {
    return axios.post(windowLocation + '/reservations/add/post', {
      name: data.name,
      hotelName: data.hotelName,
      arrivalDate: data.arrivalDate,
      departureDate: data.departureDate
    })
      .catch(err => console.log(err))
  }

  setUpdatedReservationById(data, id) {
    return axios.post(windowLocation + '/reservations/update/' + id, {
      name: data.name,
      hotelName: data.hotelName,
      arrivalDate: data.arrivalDate,
      departureDate: data.departureDate
    })
      .catch(err => console.log(err))
  }

  deleteReservationById(id) {
    axios.get(windowLocation + '/reservations/delete/' + id)
      .then().catch(err => console.log(err))
  }
}

export default ReservationService;
