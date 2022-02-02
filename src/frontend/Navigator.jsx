import React from "react";

export default class Navigator extends React.Component {
    constructor(props) {
        super(props)
    }

    unlockNext() {
        const { slideNum, selectedVehicle, selectedAmount, selectedRate, selectedUnits } = this.props.outerState
        switch (slideNum) {
            case 0: // vehicle
                if (!selectedVehicle) return false
                return true
            case 1: // amount
                if (!selectedAmount || selectedAmount < 1) return false
                return true
            case 2: // rate
                if (!selectedRate) return false
                return true
            case 3: // units
                return false
            case 4: // submit
                return false
        }
    }

    unlockBack() {
        if (this.props.outerState.slideNum > 0) return true
        return false
    }

    checkReady() {
        const { slideNum, selectedVehicle, selectedAmount, selectedRate, selectedUnits } = this.props.outerState // sloppy, but easier
        if (slideNum === 4) return false // already on submit
        if (selectedAmount && 
            selectedRate && selectedAmount > 0 && 
            selectedUnits && selectedUnits > 0 &&
            selectedVehicle) {
                return true
            } else {
            return false
        }
    }

    render() {
        const unlockedBack = this.unlockBack()
        const unlockedBackColor = unlockedBack ? "#08a6f0" : "gray"
        const unlockedBackClass = unlockedBack ? " unlocked" : ""
        const unlockedNext = this.unlockNext()
        const unlockedNextColor = unlockedNext ? "#08a6f0" : "gray"
        const unlockedNextClass = unlockedNext ? " unlocked" : ""
        const ready = this.checkReady()
        const readyClass = ready ? " unlocked" : ""
        return (
            <div className="navigator">
            
                <a className={"button prev" + unlockedBackClass} onClick={(e) => {
                        if (unlockedBack) {
                        return this.props.onBack(e)
                        } return
                    }}><i class="material-icons" style={{color: unlockedBackColor}}>
                arrow_left</i></a>
                <a className={"button submit" + readyClass} onClick={(e) => {
                        if (ready) {
                            return this.props.onSubmit(e)
                        } return
                    }}>Submit</a>
                <a className={"button next" + unlockedNextClass} 
                onClick={(e) => {
                        if (unlockedNext) {
                            return this.props.onNext(e)
                        } return
                    }}><i className={"material-icons"} style={{color: unlockedNextColor}}>
                    arrow_right</i></a>
            </div>
        )
    }
}