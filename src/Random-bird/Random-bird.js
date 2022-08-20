import React from "react";
import ListGroup from "./List-group";

export default function RandomBird() {
    return(
        <div className="random-bird">
            <img className="bird-image" src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg" alt="bird"></img>
            <ListGroup />
        </div>
    );
}