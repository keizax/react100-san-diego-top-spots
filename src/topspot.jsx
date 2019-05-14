import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={ `https://www.google.com/maps?q=${props.location[0]},${props.location[1]}` }><button>Open in Google Maps</button></a>
  </div>
);
