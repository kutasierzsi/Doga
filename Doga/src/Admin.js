import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function Admin() {

    return(
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 class="navbar-brand"></h1>
                </nav>
                <div className="container">
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Admin