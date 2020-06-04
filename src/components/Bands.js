import React from 'react';
import Band from './Band';

class Bands extends React.Component{

    renderBands = () => {
        console.log(this.props.bands)
        return this.props.bands.map((band, index) => {
          return(
            <Band band={band} key={band.id}/>
          )
        })
      }

    render(){
        console.log(this.props.bands)
        return(
            <div>
                {this.renderBands()}
            </div>
        )
    }
};

export default Bands;