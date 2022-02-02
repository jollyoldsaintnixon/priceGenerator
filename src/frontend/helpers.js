import { CHARTER, MINIBUS, SPRINTER, PARTYBUS, SEDAN, SUV, LIMOUSINE, TROLLEY, } from "../data" // sloppy to import from data twice, but it's a contrived app

export const makePlural = function(selectedVehicle, amount=2) {
    console.log(amount)
    const singular = (amount > 1) ? false : true
    switch (selectedVehicle) {
        case CHARTER:
            if (singular) return "charter bus"
            return "charter buses"
        case MINIBUS:
            if (singular) return "mini bus"
            return "mini buses"
        case SPRINTER:
            if (singular) return "sprinter"
            return "sprinters"
        case PARTYBUS:
            if (singular) return "party bus"
            return "party buses"
        case SEDAN:
            if (singular) return "sedan"
            return "sedans"
        case SUV:
            if (singular) return "SUV"
            return "SUVs"
        case LIMOUSINE:
            if (singular) return "limousine"
            return "limousines"
        case TROLLEY:
            if (singular) return "trolley"
            return "trolleys"
    }
}

export const convertToWord = function(num) {
    const words = ['zero','one','two','three','four',
    'five','six','seven','eight','nine', 'ten']; 
    if (num < words.length) return words[num]
    return num
}