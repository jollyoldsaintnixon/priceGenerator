import React from "react";
import * as Data from "../data.js"
import VehicleSlide from './VehicleSlide.jsx'
import Navigator from "./Navigator.jsx";
import RateSlide from "./RateSlide"
import AmountSlide from "./AmountSlide.jsx";
import UnitsSlide from "./UnitsSlide.jsx";

export default class OuterFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slideNum: 0,
            selectedVehicle: null,
            selectedAmount: null,
            selectedUnits: null,
            selectedRate: null,
            ready: false
        }

        this.slide = null
        
        this.handleBack = this.handleBack.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectVehicle = this.handleSelectVehicle.bind(this)
        this.handleSelectAmount = this.handleSelectAmount.bind(this)
        this.handleSelectRate = this.handleSelectRate.bind(this)
        this.handleSelectUnits = this.handleSelectUnits.bind(this)
    }

    chooseSlide() {
        const slideType = Data.SLIDES[this.state.slideNum]
        const { slideNum, selectedVehicle, selectedAmount, selectedRate, selectedUnits } = this.state
        switch (slideType) {
            case Data.VEHICLE:
                return <VehicleSlide itemList={Data.VEHICLES} selectedVehicle={selectedVehicle} onSelect={this.handleSelectVehicle}></VehicleSlide>
            case Data.AMOUNT:
                return <AmountSlide selectedVehicle={selectedVehicle} selectedAmount={selectedAmount} onSelect={this.handleSelectAmount}></AmountSlide>
            case Data.RATE:
                return <RateSlide itemList={Data.RATES} selectedRate={selectedRate} selectedVehicle={selectedVehicle} selectedAmount={selectedAmount} onSelect={this.handleSelectRate}></RateSlide>
            case Data.UNITS:
                return <UnitsSlide itemList={Data.VEHICLES} selectedUnits={selectedUnits} selectedRate={selectedRate} selectedVehicle={selectedVehicle} onSelect={this.handleSelectUnits}></UnitsSlide>
        }
    }

    handleBack(e) {
        e.preventDefault()
        const { slideNum } = this.state
        if (slideNum > 0) { // we can go back
            this.setState({slideNum: slideNum-1})
        }
    }

    handleNext(e) {     
        e.preventDefault()
        const { slideNum } = this.state
        const max = Data.SLIDES.length - 1
        if (slideNum < max) { // we can go forward
            this.setState({slideNum: slideNum+1})
        }
    }
    
    handleSubmit(e) {
        e.preventDefault()
            console.log("we were ready")
        
    }
    
    handleSelectVehicle(e) {
        e.preventDefault()
        const selectedVehicle = e.target.value
        this.setState({selectedVehicle})
    }
    
    handleSelectAmount(e) {
        e.preventDefault()
        const {value} = e.target
        this.setState({selectedAmount: value})
    }
    
    handleSelectRate(e) {
        console.log(e.target.value)
        e.preventDefault()
        this.setState({selectedRate: e.target.value})
    }
    
    handleSelectUnits(e) {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({selectedUnits: e.target.value})
    }
    
    render() {
        this.slide = this.chooseSlide()
        const { slideNum, selectedVehicle, selectedAmount, selectedRate, selectedUnits } = this.state
        return (
            <div className={"outer-frame"}>
                <p className="headline">Get a free quote!</p>
                {this.slide}
                <Navigator onBack={this.handleBack} onNext={this.handleNext} onSubmit={this.handleSubmit} 
                    ready={this.ready}  outerState={this.state}
                    // slideNum={slideNum} selectedVehicle={selectedVehicle} 
                    // selectedAmount={selectedAmount} selectedRate={selectedRate} selectedUnits={selectedUnits}
                    ></Navigator>
            </div>
        )
    }
}

