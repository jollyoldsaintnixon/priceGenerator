import React from "react";
import DropDown from "./DropDown";
import { makePlural, convertToWord } from './helpers';

export default class RateSlide extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const {selectedVehicle, selectedAmount } = this.props
        return (
            <div className="slide slide-vehicle">
                <p className="slide-headline">Alright, {convertToWord(selectedAmount)} {makePlural(selectedVehicle, selectedAmount)}. How would you like to measure your reservation- by days, hours or distance driven?</p>
                <DropDown itemList={this.props.itemList} onSelect={this.props.onSelect} selectedItem={this.props.selectedRate}></DropDown>
            </div>
        )
    }
}