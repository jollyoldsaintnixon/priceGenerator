import React from "react";

export default class Navigator extends React.Component {
    constructor(props) {
        super(props)
    }

    unlockNext() {
        const { slideNum, selectedVehicle, selectedAmount, selectedRate, selectedUnits } = this.props.outerState
        switch (slideNum) {
            case 0:
                if (!selectedVehicle) return false
                return true
            case 1:
                if (!selectedAmount || selectedAmount < 1) return false
                return true
            case 2:
                if (!selectedRate) return false
                return true
            case 3:
                return false
        }
    }

    checkReady() {
        const { selectedVehicle, selectedAmount, selectedRate, selectedUnits } = this.props.outerState
        console.log("selectedVehicle: " + selectedVehicle)
        console.log("selectedAmount: " + selectedAmount)
        console.log("selectedRate: " + selectedRate)
        console.log("selectedUnits: " + selectedUnits)
        console.log("selectedRate > 0: " + (selectedRate > 0))
        console.log("selectedUnits > 0: " + (selectedUnits > 0))
        if (selectedAmount && 
            selectedRate && selectedAmount > 0 && 
            selectedUnits && selectedUnits > 0 &&
            selectedVehicle) {
                console.log("ready")
                return true
            } else {
            console.log("not ready")
            return false
        }
    }

    render() {
        const unlocked = this.unlockNext()
        const unlockedClass = unlocked ? " unlocked" : ""
        const ready = this.checkReady()
        const readyClass = ready ? " unlocked" : ""
        return (
            <div className="navigator">
                <a className="button prev" onClick={(e) => this.props.onBack(e)}>Back</a>
                <a className={"button submit" + readyClass} onClick={(e) => {
                    if (ready) {
                        return this.props.onSubmit(e)
                    } else {
                        return
                    }
                    }}>Submit</a>
                <a className={"button next" + unlockedClass} 
                onClick={(e) => {
                    if (unlocked) {
                        return this.props.onNext(e)
                    } else {
                        return
                    }
                    }}>Next</a>
            </div>
        )
    }
}