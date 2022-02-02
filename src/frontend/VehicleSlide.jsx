import React from "react";
import DropDown from "./DropDown";
import Navigator from "./Navigator";


export default class VehicleSlide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="slide slide-vehicle">
                <p className="slide-headline">What kind of vehicle would you like to reserve?</p>
                <DropDown itemList={this.props.itemList} onSelect={this.props.onSelect} selectedItem={this.props.selectedVehicle}></DropDown>
            </div>
        )
    }
}