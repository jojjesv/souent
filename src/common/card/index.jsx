import React from "react";
import "./style.scss";
import "./style_desktop.scss";

export default function Card(props) {
	return <div className="card" style={{ top: props.topDistance, height: props.cardHeight }}>
		<img src={props.img} className="symbol top-left"></img>
		<h1 className="header" >{props.headerText}</h1>
		<p className="preview-content" dangerouslySetInnerHTML={{ __html: props.paragraphText }}></p>
		<button className="open" value={props.id} onClick={props.open}>Read more</button>
		<img src={props.img} className="symbol bottom-right" ></img>
	</div>
}