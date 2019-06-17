// var map4_ciycleStyle = {
//     "color": "#ff7800",
//     "weight": 3,
//     "opacity": 0.60
// };



function getColor(d) {
    return d == '0-2.5 min' ? '#6fd500' :
           d == '2.5-5min'  ? '#85dc01' :
           d == '5-7.5min'  ? '#a2e501' :
           d == '7.5-10min'  ? '#c1e802' :
           d == '10-15min'   ? '#dbe803' :
           d == '15-20min'   ? '#eae503' :
           d == '20-25min'   ? '#ebd102' :
           d == '25-30min'   ? '#eab102' :
           d == '30-40min'   ? '#e48e01' :
           d == '40-50min'   ? '#db6e01' :
           d == '50min-1h'   ? '#d55600' :
                      '#FFFFFF';
}

function map4_ciycleStyle(feature) {
    return {
        fillColor: getColor(feature.properties.Name),
        weight: 2,
        opacity: 1,
        color: "#ff7800",
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var borderStyle = 
{
    "color": "#000000",
    "weight": 5,
    "opacity": 1
};