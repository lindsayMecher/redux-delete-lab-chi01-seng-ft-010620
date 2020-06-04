import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  let band;
  switch (action.type) {
    case 'ADD_BAND':
      band = {
        bandName: action.bandObj.bandName,
        id: uuid()
      }
      return { bands: state.bands.concat(band)}
    case "DELETE_BAND":
      console.log("deleting")
      console.log(state, action)
      return {
        bands: state.bands.filter(band => band.id !== action.payload)
      }

    default:
      return state;
  }
};
