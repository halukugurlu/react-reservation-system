import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import AddItem from './components/AddReservation';
import IndexItem from './components/IndexReservation';
import EditItem from './components/EditReservation';
import SearchItem from './components/SearchReservation';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const buttonStyles = {
  minWidth: '200px',
  marginBottom: '10px',
};

ReactDOM.render(
  <section style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>

    <div style={{flex: '1 0 100%', textAlign: 'center'}}>
      <h2>Reservation Demo Project</h2>
    </div>

    <div style={containerStyles}>
      <div>
        <button style={buttonStyles} className={'btn btn-primary'}
                onClick={() => window.location.href = '/'}> Main
        </button>
      </div>

      <div>
        <button style={buttonStyles} className={'btn btn-primary'}
                onClick={() => window.location.href = '/add-item'}> Add a Reservation
        </button>
      </div>

      <div>
        <button style={buttonStyles} className={'btn btn-primary'}
                onClick={() => window.location.href = '/search'}> Search a Reservation
        </button>
      </div>

      <div>
        <button style={buttonStyles} className={'btn btn-primary'} onClick={() => window.location.href = '/index'}> List
          all Reservations
        </button>
      </div>
    </div>


    <div>
      <Router>
        <div>
          <Route exact path='/' component={App}/>
          <Route path='/add-item' component={AddItem}/>
          <Route path='/search' component={SearchItem}/>
          <Route path='/index' component={IndexItem}/>
          <Route path='/edit/:id' component={EditItem}/>
        </div>
      </Router>
    </div>
  </section>,
  document.getElementById('root')
);
