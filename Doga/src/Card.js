import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PutSzallas } from './PutSzallas';
import { DeleteSzallas } from './DeleteSzallas';

function Card({ data }) {
  return (
    <div className="card mb-3 col-3">
        <h3>{data.name}</h3>
        <p>{data.hostname}</p>
        <p>{data.location}</p>
        <p>{data.price}</p>
        <p>{data.minimum_nights}</p>
        <input type='button' className='btn btn-warning' value='Módosít' onClick={PutSzallas}/>
        <input type='button' className='btn btn-danger' value='Töröl' onClick={DeleteSzallas}/>

    </div>
  );
}

export default Card;
