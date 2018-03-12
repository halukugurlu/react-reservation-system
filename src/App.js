import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div>
          {this.props.children}
        </div>

        <div style={{position: 'relative', top:'175px'}}>
          <h2>Welcome to Hotel Reservation System Demo</h2>
          <div style={{maxWidth:'500px'}}>
            This project was bootstrapped with
            <a href={"https://github.com/facebook/create-react-app"}
               rel="noopener noreferrer"  target="_blank">
            <span> Create React App.</span></a>
            Through navigating the app you can,
            <ul>
              <li>
                Create a new reservation,
              </li>
              <li>
                Search an existing reservation with particular ID
              </li>
              <li>
                List all of the reservations
              </li>
              <li>
                Edit already existing reservations
              </li>
              <li>
                Delete existing reservations
              </li>
            </ul>

            The goal of this project is to demonstrate
            basic crud operations. The code has been implemented
            to scale easily. An addition of a new field does not require change in the logic.
            It is a matter of adding a new input field in the front-end code,
            and updating the mongo schema object accordingly.
            The app has been deployed to heroku, and integrated with Mlab Mongodb database.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
