import React  from "react";
import { Card } from "./Card"
import "../project/Card-list.css";

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monster.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}

        </div>
    )
}