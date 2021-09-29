import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CityForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.getLocation();
  }
  render() {
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label> Where would you like to go? </Form.Label>
            <Form.Control onChange={this.props.searchCity} type='text'/>
          </Form.Group>
          <Button type='submit'>Explore!</Button>
        </Form>
      </>
    )
  }
}

export default CityForm;