function map_geojson(change_over_time_geo_data,map) {

    //maker突出显示
    var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                // 104.0410418234, 30.4665799517
                // coordinates: [104.06551588183815,30.497417092556837]
                // coordinates: [104.0499688197905,30.502331690903805]
                // coordinates: [104.03309626135773,30.504559383224176],
                coordinates: [104.03587021320936, 30.44923689434857],
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


    console.log(change_over_time_geo_data);
// maker
    map.on('load', function () {
        map.addSource('trees', {
            type: 'geojson',

            data: change_over_time_geo_data,
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
        //         filter: ['==', ['number', ['get', 'Hour']], 12]
        //
        //     }

        map.addLayer({
                id: 'collisions',
                type: 'heatmap',
                source: 'trees',
                paint: {
                    // increase weight as diameter breast height increases

                    // increase intensity as zoom level increases
                    'heatmap-intensity': {
                        stops: [
                            [11, 1],
                            [15, 3]
                        ]
                    },
                    //assign color values be applied to points depending on their density
                    'heatmap-color': [
                        'interpolate',
                        ['linear'],
                        ['heatmap-density'],
                        0, 'rgba(236,222,239,0)',
                        0.1, '#50fd5c',
                        0.2, '#96f545',
                        0.3, '#b7fb41',
                        0.4, '#d8f942',
                        0.5, '#eff948',
                        0.6, '#ffd74c',
                        0.7, '#ffa231',
                        0.8, '#f27246',
                        0.9, '#fc5740',
                        1.0, '#fd4e45',
                        1.1, '#d82d28'
                    ],
                    // increase radius as zoom increases
                    'heatmap-radius': {
                        stops: [
                            [11, 15],
                            [15, 20]
                        ]
                    },
                    // decrease opacity to transition into the circle layer
                    'heatmap-opacity': {
                        default: 1,
                        stops: [
                            [14, 1],
                            [15, 0]
                        ]
                    },
                },
                filter: ['==', ['number', ['get', 'Hour']], 12]

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

    });

}





