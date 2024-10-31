import React from "react";
import "./styleBlockItem.css"

const BlockItem = ({name, audience, lightingPower, srcImg="https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1"}) => {
    return (
        <>
            <div className="blockitem">
                <img className="blockitem-img" src={srcImg}/>
                <div className="blockitem__content">
                    <h2 className="blockitem__content-name">{name}</h2>
                    <p><span className="span__font-weight">Audience:</span> {audience} </p>
                    <p><span className="span__font-weight">Lighting power:</span> {lightingPower} </p>
                </div>
            </div>
        </>
    );
}

export default BlockItem;
