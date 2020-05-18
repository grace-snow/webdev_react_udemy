import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // ! This is the ONLY time we do direct assignment to this.state
  //   // ! After initialising like this, use setState 
  //   this.state = { lat: null, errorMessage: '' };
    
  // }
  
  // Exact equivalent of above in shorter syntax that Babel will compile to the above:
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // console.log('My component was rendered to the screen (didMount)');

    window.navigator.geolocation.getCurrentPosition(
      // Call setState to update state
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated and re-rendered (didUpdate)');
  }

  renderContent() {
    const error = this.state.errorMessage && !this.state.lat;
    const success = !this.state.errorMessage && this.state.lat;
  
    if (error) {
      return <div>Error: { this.state.errorMessage }</div>
  
    } else if (success) {
      return <SeasonDisplay lat={ this.state.lat } />
      // <div>Latitude: { this.state.lat }</div>
    
    } else {
      return <LoadingSpinner message="Please accept location request" /> 
    }
  }

  // React says we have to define render method!
  render () {
    return (
      <div className="border red">
        { this.renderContent() }
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);