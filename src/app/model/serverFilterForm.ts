export class Filter {

    constructor(
        public storageMin: number,
        public storageMax: number,
        public ram: number,
        public hdd: number,
        public location: string
    ) {  }

}

export const ram = [
    {
        label: "2GB",
        value: "2",
        checked:false
    },
    {
        label: "4GB",
        value: "4",
        checked:false
    },
    {
        label: "8GB",
        value: "8",
        checked:false
    },
    {
        label: "12GB",
        value: "12",
        checked:false
    },
    {
        label: "16GB",
        value: "16",
        checked:false
    },
    {
        label: "24GB",
        value: "24",
        checked:false
    },
    {
        label: "32GB",
        value: "32",
        checked:false
    },
    {
        label: "48GB",
        value: "48",
        checked:false
    },
    {
        label: "64GB",
        value: "64",
        checked:false
    },
    {
        label: "96GB",
        value: "96",
        checked:false
    }
];

export const hdd = [
    "SAS", 
    "SSD", 
    "SATA2"
];

export const locations = [
    "AmsterdamAMS-01",
    "DallasDAL-10",
    "FrankfurtFRA-10",
    "Hong KongHKG-10",
    "San FranciscoSFO-12",
    "SingaporeSIN-11",
    "Washington D.C.WDC-01"
]