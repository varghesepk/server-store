export interface Server {
    "model": string,
    "ram": {
        "memory": number,
        "unit": string,
        "type": string
    },
    "hdd": {
        "memory": number,
        "count": number,
        "unit": string,
        "type" : string
    },
    "location": string,
    "price": {
        "currency": string,
        "currencySymbol": string,
        "amountCents": number
    }
}
