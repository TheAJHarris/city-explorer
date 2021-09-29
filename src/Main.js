import React from 'react';
import CityForm from './Form.js';
import axios from 'axios';
import LatLon from './LatLon.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
    }
  } 

  searchCity= (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  }

  getLocation = async() => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONKEY}&q=${this.state.searchQuery}&format=json`;
    console.log(url);
    try {
      let location = await axios.get(url)
      console.log(location.data[0].display_name)
      this.setState({
        location: location.data[0],

      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <>
      <p>
        Enter a city to search for it's location
      </p>
      <CityForm searchCity={this.searchCity} getLocation={this.getLocation}/>
      <LatLon location={this.state.location}/>
      </>
    )
  }
}

export default Main;