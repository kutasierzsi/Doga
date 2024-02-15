import { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Card from "./Card";

export function DeleteSzallas() {
    const param = useParams();
    const id = param.id;
    const [szallas, setSzallas] = useState([]);
    const [isPending, setPending] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`http://nodejs.sulla.hu/data/${id}`, {credentials: "include"})
        const szallasss = await res.json();
        setSzallas(szallasss);
            } catch(error) {
                console.log(error);
            }
        finally {
            setPending(false);
        }
    
    })();
}, [id]);
return(
    <div>
        {
            isPending || !szallas.id ? (<div className="spinner-border"></div>) : (
                <div>
                    <div>
                        <div>
                            <Card/>
                            
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                fetch(`http://nodejs.sulla.hu/data/${id}`, {
                                    method: "DELETE",
                                    credentials: "include",
                                })
                                .then(() => {
                                    navigate("/");
                                })
                                .catch((error) => {
                                    console.log(error);
                                });}}>
                            </form> 
                        </div>
                        <p>
                            <NavLink to={"/"}  className={"text-success"}><button className="bi bi-backspace rounded btn btn-warning">Mégsem</button></NavLink>&nbsp;&nbsp;&nbsp;
                            <button className="bi bi-trash3 rounded btn btn-danger">Törlés</button>
                        </p>
                        
                    </div>
                </div>
)} </div>
);
}
export default DeleteSzallas;