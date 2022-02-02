import React from "react";
import { makePlural } from './helpers'

export default class AmountSlide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const selectedAmount = this.props.selectedAmount
        return (
            <div className="slide slide-amount">
                <p className="slide-headline">How many {makePlural(this.props.selectedVehicle)} would you like to reserve?</p>
                <input className="input" type="number" min="0" autoFocus value={selectedAmount} onChange={e => this.props.onSelect(e)}></input>
            </div>
        )
    }
}