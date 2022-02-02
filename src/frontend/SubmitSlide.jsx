import React from "react";
import { PRICE_SHEET, DAILY, HOURLY, DISTANCE } from "../data";
import { makePlural, convertToWord } from "./helpers";

export default class SubmitSlide extends React.Component {
    constructor(props) {
        super(props)

    }

    generatePrice({selectedVehicle, selectedAmount, selectedRate, selectedUnits}) {
        return (
        
        PRICE_SHEET[selectedVehicle][selectedRate] * selectedUnits * selectedAmount
    )}

    makeRateSentence({selectedRate, selectedUnits}) {
        switch (selectedRate) {
            case DAILY:
                return `for ${convertToWord(selectedUnits)} days.`
            case HOURLY:
                return `for ${convertToWord(selectedUnits)} hours.`
            case DISTANCE:
                return `for ${convertToWord(selectedUnits)} miles.`
        }
    }

    render() {
        const {selectedVehicle, selectedAmount, selectedRate, selectedUnits} = this.props
        const price = this.generatePrice({selectedVehicle, selectedAmount, selectedRate, selectedUnits})
        const rateSentence = this.makeRateSentence({selectedRate, selectedUnits})
        let amountInWords = convertToWord(selectedAmount)
        amountInWords = amountInWords.charAt(0).toUpperCase() + amountInWords.slice(1)
        const pluralizedVehicle = makePlural(selectedVehicle, selectedAmount)
    
        return (
            <div className="slide slide-submit">
                <p className="submit-headline">${price}</p>
                <p className="submit-details">{amountInWords} {pluralizedVehicle} {rateSentence}</p>
            </div>
        )
    }
}