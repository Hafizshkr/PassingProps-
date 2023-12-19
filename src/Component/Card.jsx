import React from "react";
import "../Component/Card.css"




const Card = (props) => {
    return(
        <>
        {props.details.map((value)=>(
        <div className="container" key={value.id}>
        <div className="card-container" >
            <img src={value.img}></img>
            <h1 className="title">{value.title}</h1>
            <p className="description">{value.description}</p>
            <button>Button</button>
        </div>
        </div>
        ))};
        </>
    )
}

export default Card;