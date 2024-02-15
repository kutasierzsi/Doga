import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function PutSzallas() {

    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const [szallas, setSzallas] = useState([]);
    const [modname, setModname] = useState('');
    const [modhostname, setModhostname] = useState('');
    const [modlocation, setModlocation] = useState('');
    const [modprice,setModprice] = useState('');
    const [modminimum_nights, setModminimum_nights] = useState('');

    useEffect(() => {
        (async() => {
            try {
        const res = await fetch(`http://nodejs.sulla.hu/data/${id}`, {credentials: "include"})
        const szallasss = await res.json();
        setSzallas(szallasss);
        setModname(szallasss.name);
        setModhostname(szallasss.hostname);
        setModlocation(szallasss.location);
        setModprice(szallasss.price);
        setModminimum_nights(szallasss.minimum_nights);
            } catch(error) {
                console.log(error);
            }
    })();
}, [id, modname, modhostname, modlocation, modprice, modminimum_nights]);

const modName = event => {
    setModname(event.target.value);
}
const modHostname = event => {
    setModhostname(event.target.value);
}
const modLocation = event => {
    setModlocation(event.target.value);
}
const modPrice = event => {
    setModprice(event.target.value);
}
const modMinimum_nights = event => {
    setModminimum_nights(event.target.value);
}
return (
    <div className="p-5 text-center content bg-lavender">
            <h2>Szállás módosítása</h2>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`http://nodejs.sulla.hu/data/${id}`, {
                    method: "PUT",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: e.target.elements.name.value,
                        hostname: e.target.elements.brand.value,
                        location: e.target.elements.price.value,
                        price: e.target.elements.quantity.value,
                        minimum_nights: e.target.elements.imageURL.value,
                    }),
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}
            >
    <div className="form-group row pb-3">
    <label className="col-sm-3 col-form-label">Name:</label>
<div>
    <input type="text" name="name" className="form-control" defaultValue={szallas.name} onChange={modName} />
</div>
<div className="form-group row pb-3">
    <label className="col-sm-3 col-form-label">Hostname:</label>
<div>
    <input type="text" name="hostname" className="form-control" defaultValue={szallas.hostname} onChange={modHostname} />
</div>
</div>
<div className="form-group row pb-3">
    <label className="col-sm-3 col-form-label">Location:</label>
<div>
    <input type="text" name="location" className="form-control" defaultValue={szallas.location} onChange={modLocation} />
</div>
</div>
<div className="form-group row pb-3">
    <label className="col-sm-3 col-form-label">Price:</label>
<div>
    <input type="number" name="price" className="form-control" defaultValue={szallas.price} onChange={modPrice} />
</div>
</div>
<div className="form-group row pb-3">
    <label className="col-sm-3 col-form-label">Minimum nights:</label>
<div>
    <input type="text" name="minimum_nights" className="form-control" defaultValue={szallas.minimum_nights} onChange={modMinimum_nights}/>
</div>
</div>
<button type="submit" className="btn btn-success">Küldés</button>
</div>
</form>
</div>
);
}

export default PutSzallas;