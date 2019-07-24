import React from "react";
import "../styles/Card.css";
import Card from "./Card.js";



function CardColumn(props) {
    return (
        <div className="card-columns mx-auto mt-3">
            {props.images.map((image) =>
                <Card
                    key={image.id}
                    image={image.url}
                    alt={image.name}
                    isAnimated={image.id===props.animId}
                    hClick={()=> props.hClick(image.id)}
                />
            )}
        </div>
    );
}

export default CardColumn;