import React from "react";
import "./Track.css";

export class Track extends React.Component {
    renderAction() {

    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    {this.props.track.name}
                    {this.props.track.artist} | {this.props.track.album}
                </div>
                {/* <button className="Track-action"><!-- + or - will go here --></button> */}
            </div>
        )
    }
}