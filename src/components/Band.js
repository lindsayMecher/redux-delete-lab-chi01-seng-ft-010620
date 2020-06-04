import React, { Component } from 'react';
import { connect } from 'react-redux';

class Band extends Component {

  handleDelete = () => {
    console.log(this.props.band.id)
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <h1>
          {this.props.band.bandName}
        </h1>
        <button onClick={(event) => this.handleDelete(event)}>
          Delete Band
        </button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: (bandId) => dispatch({type: "DELETE_BAND", payload: bandId})
  }
}

export default connect(null, mapDispatchToProps)(Band);

// In the Band component, you will need to add a button that dispatches an action of type 'DELETE_BAND' and then passes through that band's id as the action.id. This dispatched action should be provided as a prop from BandsContainer.

// You will have to alter the reducer such that it creates a new list of bands that does not include the one whose delete button was pressed.
