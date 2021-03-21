import data from '../assets/dataCountry.json';

export default function getChartData (state) {
    let label = "Volume";
    let series = [];
    let country = state.country;
    let startYear = state.year;
    let pollutants = state.pollutant;
    if(country && startYear) {
        series = data[country].filter(item => item.year===startYear && (pollutants ? item.category===pollutants : true))
                            .map((item) =>[item.category.slice(0,15),item.value]);
    }
    return [
        {
          label: label,
          data: series
        }
      ];
}