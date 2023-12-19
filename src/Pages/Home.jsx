import React from "react";
import Card from "../Component/Card";
import CardData from "../Data/CardData";

const Home = () => {
    return (
        <>
        <Card details={CardData.cards}/>
        </>
    )

}

export default Home;