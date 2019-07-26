import React from "react";
import "../styles/Card.css";

function Card(props) {
    var imgUrl = props.image;
    if (props.isAnimated) {
        imgUrl = "/images/shocked.png";
    } 
    
    return (
        <div className="card mt-1">
            <img className={`card-img-top ${props.isAnimated?"img-shake":""}`} alt={props.alt} onClick={props.hClick} src={process.env.PUBLIC_URL + imgUrl} />
        </div>
    )
}

export default Card;