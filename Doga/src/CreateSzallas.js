import { useNavigate } from "react-router-dom";

export function CreateSzallas() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, hostname, location, price, minimum_nights} = e.target.elements;
        const SzallasData = {
            name: name.value,
            hostname: hostname.value,
            location: location.value,
            price: price.value,
            minimum_nights: minimum_nights.value
        };

        try {
            await fetch("http://nodejs.sulla.hu/data", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(SzallasData),
            });
            
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5 text-center content bg-whitesmoke">
            <h2>Új szállás</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Name:</label>
                    <div>
                        <input type="text" name="name" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Host name:</label>
                    <div>
                        <input type="text" name="hostname" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Location:</label>
                    <div>
                        <input type="text" name="location" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Price:</label>
                    <div>
                        <input type="number" name="price" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Minimum nights:</label>
                    <div>
                        <input type="text" name="minimum_nights" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
}

export default CreateSzallas;