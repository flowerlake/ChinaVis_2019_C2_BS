mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtbWVyb25lIiwiYSI6ImNqdG1zYnV1ZDF6NjU0NGxmeXk3aTlxeTIifQ.Bl298aYMAylfBduuZeEgtQ';

var map = new mapboxgl.Map({
    container: 'map', // container element id
    style: 'mapbox://styles/summerone/cjwrq4gyp061b1cue61526rb5',
    center: [104.06487, 30.51572], // initial map center in [lon, lat]
    zoom: 12
});

//maker突出显示
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [104.0410418234, 30.4665799517]
        },
        properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
        }
    }]
};

geojson.features.forEach(function (marker) {

    // create a HTML element for each feature
    var el = document.createElement('marker');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
            .setHTML('<h3 style="color: #fc9272">' + '中国现代五项赛事中心' + '</h3><p style="color: #fc9272">' + '坐标 : 104.0410418234,30.4665799517' + '</p>'))
        .addTo(map);
});


// maker
map.on('load', function () {
    map.addSource('trees', {
        type: 'geojson',
        data: './calendar_graph/chengdu_40000.geojson'
    });
    // map.addLayer({
    //         id: 'collisions',
    //         type: 'heatmap',
    //         source: 'trees',
    //         paint: {
    //             // increase weight as diameter breast height increases
    //
    //             // increase intensity as zoom level increases
    //             'heatmap-intensity': {
    //                 stops: [
    //                     [11, 1],
    //                     [15, 3]
    //                 ]
    //             },
    //             // assign color values be applied to points depending on their density
    //             // 'heatmap-color': [
    //             //     'interpolate',
    //             //     ['linear'],
    //             //     ['heatmap-density'],
    //             //     0, 'rgba(236,222,239,0)',
    //             //     0.2, '#FFB14E',
    //             //     0.4, '#FF5B7D',
    //             //     0.6, '#E9415A',
    //             //     0.8, '#E90011'
    //             // ],
    //             // increase radius as zoom increases
    //             'heatmap-radius': {
    //                 stops: [
    //                     [11, 15],
    //                     [15, 20]
    //                 ]
    //             },
    //             // decrease opacity to transition into the circle layer
    //             'heatmap-opacity': {
    //                 default: 1,
    //                 stops: [
    //                     [14, 1],
    //                     [15, 0]
    //                 ]
    //             },
    //         },
    filter: ['==', ['number', ['get', 'Hour']], 12]
    //
    //     }
    // );
    map.addLayer({
        id: 'trees-point',
        type: 'circle',
        source: 'trees',
        minzoom: 14,
        paint: {
            // increase the radius of the circle as the zoom level and dbh value increases
            'circle-radius': {
                property: 'dbh',
                type: 'exponential',
                stops: [
                    [{zoom: 15, value: 1}, 5],
                    [{zoom: 15, value: 62}, 10],
                    [{zoom: 22, value: 1}, 20],
                    [{zoom: 22, value: 62}, 50],
                ]
            },
            'circle-color': {
                property: 'dbh',
                type: 'exponential',
                stops: [
                    [0, 'rgba(236,222,239,0)'],
                    [10, 'rgb(236,222,239)'],
                    [20, 'rgb(208,209,230)'],
                    [30, 'rgb(166,189,219)'],
                    [40, 'rgb(103,169,207)'],
                    [50, 'rgb(28,144,153)'],
                    [60, 'rgb(1,108,89)']
                ]
            },
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            'circle-opacity': {
                stops: [
                    [14, 0],
                    [15, 1]
                ]
            }
        }
    });


    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,

        'paint': {
            'fill-extrusion-color': [
                'interpolate',
                ["exponential", 0.99],
                ["get", "height"],
                0,
                "#43CBFF",
                400,
                "#130cb7"
            ],

// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                9, 0,
                18.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                9, 0,
                18.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    });
    map.on('click', 'trees-point', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)

            .setHTML('<p style="color: #fc9272"> ID ' + e.features[0].properties.orderID + ' </p>>   <p style="color: #fc9272">time:  ' + e.features[0].properties.Hour + '</p>' + '<p style="color: #fc9272">loc:' + e.features[0].geometry.coordinates+'</p>')
            .addTo(map);
    });


    //加一个 zoom 空值栏
    map.addControl(new mapboxgl.NavigationControl());
    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);
    var draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });
    map.addControl(draw);//draw 的空值栏
    function updateArea(e) {
        var data = draw.getAll();
        console.log(data)
        var features1 = map.queryRenderedFeatures(e.property, {
            layers: ['trees-point']
        });
        // var features2 = map.queryRenderedFeatures(e.property, {
        //     layers: ['road-label']
        // });
        console.log(features1)
        var feature1 = features1[0];
        document.getElementById('features2').innerHTML = JSON.stringify(features1[0].properties, null, 2);
        console.log(feature1)
        //var feature2 = features2[0];
        //document.getElementById('features').innerHTML = JSON.stringify(features2[0].properties.name, null,2);
        //console.log(feature2)
        var answer = document.getElementById('features');

        if (data.features.length > 0) {
            var area = turf.area(data);
// restrict to area to 2 decimal points
            var rounded_area = Math.round(area * 100) / 100;
            answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
        } else {
            answer.innerHTML = '';
            if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
        }
    }


    document.getElementById('slider').addEventListener('input', function (e) {
        var hour = parseInt(e.target.value);
        // update the map
        map.setFilter('trees-point', ['==', ['number', ['get', 'Hour']], hour]);

        // converting 0-23 hour to AMPM format
        var ampm = hour >= 12 ? 'PM' : 'AM';
        var hour12 = hour % 12 ? hour % 12 : 12;

        // update text in the UI
        document.getElementById('active-hour').innerText = hour12 + ampm;
    });

})
;
