import React from "react";
import { DAILY, HOURLY, DISTANCE } from "../data"
import { makePlural } from './helpers';

export default class UnitsSlide extends React.Component {
    constructor(props) {
        super(props)

    }

    makeSentenceEnd() {
        switch (this.props.selectedRate) {
            case DAILY:
                return `for how many days will you need the ${makePlural(this.props.selectedVehicle)}?`
            case HOURLY:
                return `for how many hours will you need the ${makePlural(this.props.selectedVehicle)}?`
            case DISTANCE:
                return "how many miles do you expect to cover?"
        }
    }

    render() {
        const sentenceEnd = this.makeSentenceEnd()
        const { selectedUnits } = this.props
        return (
            <div className="slide slide-amount">
                <p className="slide-headline">And finally, {sentenceEnd}</p>
                <input className="input" type="number" min="0" autoFocus value={selectedUnits} onChange={e => this.props.onSelect(e)}></input>
            </div>
        )
    }
}