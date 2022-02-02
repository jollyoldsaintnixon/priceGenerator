const VEHICLE = 'vehicle'
const UNITS = 'units'
const RATE = 'rate'
const AMOUNT = 'amount'
const SUBMIT = 'submit'

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

const SLIDES = [VEHICLE, AMOUNT, RATE, UNITS, SUBMIT]
const VEHICLES = [CHARTER, MINIBUS, SPRINTER, PARTYBUS, SEDAN, SUV, LIMOUSINE, TROLLEY]
const RATES = [DAILY, HOURLY, DISTANCE]


const PRICE_SHEET = {
    "Charter": {
        "Daily": 1000,
        "Hourly": 400,
        "Distance": 3.5,
    },
    "Mini Bus": {
        "Daily": 925,
        "Hourly": 360,
        "Distance": 3.25,
    },
    "Sprinter": {
        "Daily": 850,
        "Hourly": 320,
        "Distance": 3,
    },
    "Party Bus": {
        "Daily": 775,
        "Hourly": 280,
        "Distance": 2.75,
    },
    "Sedan": {
        "Daily": 700,
        "Hourly": 240,
        "Distance": 2.5,
    },
    "SUV": {
        "Daily": 625,
        "Hourly": 200,
        "Distance": 2.25,
    },
    "Limousine": {
        "Daily": 550,
        "Hourly": 160,
        "Distance": 2,
    },
    "Trolley": {
        "Daily": 475,
        "Hourly": 120,
        "Distance": 1.75,
    },
}

export {SLIDES, VEHICLES, RATES, PRICE_SHEET, 
    VEHICLE, UNITS, RATE, AMOUNT, SUBMIT,
    CHARTER, MINIBUS, SPRINTER, PARTYBUS, SEDAN, SUV, LIMOUSINE, TROLLEY,
    DAILY, HOURLY, DISTANCE,
}