import React from "react";
import "../styles/Card.css";

function Card(props) {

    return (
        <div className="card">
            <img className="card-img-top" alt={props.alt} onClick={props.hClick} src={process.env.PUBLIC_URL + `${props.image}`} />
        </div>
    )
}

export default Card;