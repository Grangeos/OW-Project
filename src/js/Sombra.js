import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Sombra extends Component {
  render() {
    return (
        <section>
            <Alert bsStyle="warning">
                <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                good.
            </Alert>
        </section>
    );
  }
}

export default Sombra;
