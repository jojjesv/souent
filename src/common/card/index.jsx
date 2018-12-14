import React from "react";
import "./style.scss";
import "./style_desktop.scss";

export default function Card(props){
    return <div className="card" style={{top: props.dt, height: props.ch}}>
        <img src={props.cimg} className="symbol top-left"></img>
        <h1 className="header" id="b2">{props.htext}</h1>
        <p className="preview-content" id="b3" dangerouslySetInnerHTML={{ __html: props.ptext }}></p>
        <button className="open" value={props.id} onClick={props.onOpen}>Open</button>
        <img src={props.cimg} className="symbol bottom-right" style={{transform: props.deg}}></img>
    </div>
}