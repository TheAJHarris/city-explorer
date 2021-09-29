import React from 'react';

class LatLon extends React.Component {
  render() {
    return(
      <>
      <h2>Welcome to {this.props.location.display_name}</h2>
      <p>Lat: {this.props.location.lat}, Lon: {this.props.location.lon}</p>
      </>
    )
  }
}

export default LatLon;