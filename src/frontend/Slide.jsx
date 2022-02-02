import React from "react";

export default class Slide extends React.Component {
    constructor(props) {
        super(props)
        this.slideNum = props.slideNum
        console.log("hey")
    }

    render() {
        return (
        <div>
            {this.slideNum}
        </div>

        )
    }
}