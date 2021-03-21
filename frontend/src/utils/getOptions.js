import data from '../assets/dataCountry.json';

export default function DataSelector(){
    let year = [];
    let pollutants = [];
    let countries = Object.keys(data);
    countries.reduce(function(acc, item, index,arr){
        if(acc) {
            data[acc].forEach(obj => {
                year.push(obj.year)
                pollutants.push(obj.category.replace(/_/g," "))
            })
        }
        data[item].forEach(obj => {
            year.push(obj.year)
            pollutants.push(obj.category.replace(/_/g," "))
        })
 
    });
    return {
        yearOption: Array.from(new Set(year)),
        countriesOption: countries,
        pollutantsOption: Array.from(new Set(pollutants))
    }
}