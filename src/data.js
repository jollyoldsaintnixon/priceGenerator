const VEHICLE = 'vehicle'
const UNITS = 'units'
const RATE = 'rate'
const AMOUNT = 'amount'

const CHARTER = "Charter"
const MINIBUS = "Mini Bus"
const SPRINTER = "Sprinter"
const PARTYBUS = "Party Bus"
const SEDAN = "Sedan"
const SUV = "SUV"
const LIMOUSINE = "Limousine"
const TROLLEY = "Trolley"

const DAILY = "Daily"
const HOURLY = "Hourly"
const DISTANCE = "Distance"

const SLIDES = [VEHICLE, AMOUNT, RATE, UNITS]
const VEHICLES = [CHARTER, MINIBUS, SPRINTER, PARTYBUS, SEDAN, SUV, LIMOUSINE, TROLLEY]
const RATES = [DAILY, HOURLY, DISTANCE]


const PRICE_SHEET = {
    CHARTER: {
        DAILY: 1000,
        HOURLY: 400,
        DISTANCE: 3.5,
    },
    MINIBUS: {
        DAILY: 925,
        HOURLY: 360,
        DISTANCE: 3.25,
    },
    SPRINTER: {
        DAILY: 850,
        HOURLY: 320,
        DISTANCE: 3,
    },
    PARTYBUS: {
        DAILY: 775,
        HOURLY: 280,
        DISTANCE: 2.75,
    },
    SEDAN: {
        DAILY: 700,
        HOURLY: 240,
        DISTANCE: 2.5,
    },
    SUV: {
        DAILY: 625,
        HOURLY: 200,
        DISTANCE: 2.25,
    },
    LIMOUSINE: {
        DAILY: 550,
        HOURLY: 160,
        DISTANCE: 2,
    },
    TROLLEY: {
        DAILY: 475,
        HOURLY: 120,
        DISTANCE: 1.75,
    },
}

export {SLIDES, VEHICLES, RATES, PRICE_SHEET, VEHICLE, UNITS, RATE, AMOUNT, 
    CHARTER, MINIBUS, SPRINTER, PARTYBUS, SEDAN, SUV, LIMOUSINE, TROLLEY,
    DAILY, HOURLY, DISTANCE,
}