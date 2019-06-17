var trafficLayers = [
    {
        'id': 'traffic-street-link-bg',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'mapbox://mapbox.mapbox-traffic-v1',
        'source-layer': 'traffic',
        'minzoom': 15,
        'filter': [
            'all',
            [
                '==',
                '$type',
                'LineString'
            ],
            [
                'all',
                [
                    'has',
                    'congestion'
                ],
                [
                    'in',
                    'class',
                    'link',
                    'motorway_link',
                    'service',
                    'street'
                ]
            ]
        ],
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        14,
                        2.5
                    ],
                    [
                        20,
                        15.5
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(145, 95%, 30%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 42%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 37%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 22%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        14,
                        2
                    ],
                    [
                        20,
                        18
                    ]
                ]
            },
            'line-opacity': {
                'base': 1,
                'stops': [
                    [
                        15,
                        0
                    ],
                    [
                        16,
                        1
                    ]
                ]
            }
        }
    },
    {
        'id': 'traffic-secondary-tertiary-bg',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'mapbox://mapbox.mapbox-traffic-v1',
        'source-layer': 'traffic',
        'minzoom': 6,
        'filter': [
            'all',
            [
                '==',
                '$type',
                'LineString'
            ],
            [
                'all',
                [
                    'has',
                    'congestion'
                ],
                [
                    'in',
                    'class',
                    'secondary',
                    'tertiary'
                ]
            ]
        ],
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        9,
                        1.5
                    ],
                    [
                        18,
                        11
                    ],
                    [
                        20,
                        16.5
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(145, 95%, 30%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 42%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 37%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 22%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        10,
                        0.5
                    ],
                    [
                        15,
                        5
                    ],
                    [
                        18,
                        11
                    ],
                    [
                        20,
                        14.5
                    ]
                ]
            },
            'line-opacity': {
                'base': 1,
                'stops': [
                    [
                        13,
                        0
                    ],
                    [
                        14,
                        1
                    ]
                ]
            }
        }
    },
    {
        'id': 'traffic-primary-bg',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'mapbox://mapbox.mapbox-traffic-v1',
        'source-layer': 'traffic',
        'minzoom': 6,
        'filter': [
            'all',
            [
                '==',
                '$type',
                'LineString'
            ],
            [
                'all',
                [
                    '==',
                    'class',
                    'primary'
                ],
                [
                    'has',
                    'congestion'
                ]
            ]
        ],
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        10,
                        0.75
                    ],
                    [
                        15,
                        6
                    ],
                    [
                        20,
                        18
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(145, 95%, 30%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 42%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 37%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 22%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.2,
                'stops': [
                    [
                        10,
                        0
                    ],
                    [
                        12,
                        1.5
                    ],
                    [
                        18,
                        13
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            'line-opacity': {
                'base': 1,
                'stops': [
                    [
                        11,
                        0
                    ],
                    [
                        12,
                        1
                    ]
                ]
            }
        }
    },
    {
        'id': 'traffic-trunk-bg',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'mapbox://mapbox.mapbox-traffic-v1',
        'source-layer': 'traffic',
        'minzoom': 6,
        'filter': [
            'all',
            [
                '==',
                '$type',
                'LineString'
            ],
            [
                'all',
                [
                    '==',
                    'class',
                    'trunk'
                ],
                [
                    'has',
                    'congestion'
                ]
            ]
        ],
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        8,
                        0.5
                    ],
                    [
                        9,
                        2.25
                    ],
                    [
                        18,
                        13
                    ],
                    [
                        20,
                        17.5
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(145, 95%, 30%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 42%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 37%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 22%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        7,
                        0
                    ],
                    [
                        9,
                        1
                    ],
                    [
                        18,
                        13
                    ],
                    [
                        20,
                        18
                    ]
                ]
            },
            'line-opacity': 1
        }
    },
    {
        'id': 'traffic-motorway-bg',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'mapbox://mapbox.mapbox-traffic-v1',
        'source-layer': 'traffic',
        'minzoom': 6,
        'filter': [
            'all',
            [
                '==',
                '$type',
                'LineString'
            ],
            [
                'all',
                [
                    '==',
                    'class',
                    'motorway'
                ],
                [
                    'has',
                    'congestion'
                ]
            ]
        ],
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        6,
                        0.5
                    ],
                    [
                        9,
                        3
                    ],
                    [
                        18,
                        16
                    ],
                    [
                        20,
                        20
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(145, 95%, 30%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 42%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 37%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 22%)'
                    ]
                ]
            },
            'line-opacity': 1,
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        7,
                        0
                    ],
                    [
                        9,
                        1.2
                    ],
                    [
                        11,
                        1.2
                    ],
                    [
                        18,
                        10
                    ],
                    [
                        20,
                        15.5
                    ]
                ]
            }
        }
    },
    {
        'id': 'traffic-primary',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'ref': 'traffic-primary-bg',
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        10,
                        1
                    ],
                    [
                        15,
                        4
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(142, 55%, 50%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 55%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 50%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 35%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.2,
                'stops': [
                    [
                        10,
                        0
                    ],
                    [
                        12,
                        1.5
                    ],
                    [
                        18,
                        13
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            'line-opacity': 1
        }
    },
    {
        'id': 'traffic-secondary-tertiary',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'ref': 'traffic-secondary-tertiary-bg',
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        9,
                        0.5
                    ],
                    [
                        18,
                        9
                    ],
                    [
                        20,
                        14
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(142, 55%, 50%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 55%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 50%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 35%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        10,
                        0.5
                    ],
                    [
                        15,
                        5
                    ],
                    [
                        18,
                        11
                    ],
                    [
                        20,
                        14.5
                    ]
                ]
            },
            'line-opacity': 1
        }
    },
    {
        'id': 'traffic-street-link',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'ref': 'traffic-street-link-bg',
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        14,
                        1.5
                    ],
                    [
                        20,
                        13.5
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(142, 55%, 50%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 55%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 50%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 35%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        14,
                        2
                    ],
                    [
                        20,
                        18
                    ]
                ]
            },
            'line-opacity': 1
        }
    },
    {
        'id': 'traffic-trunk',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'ref': 'traffic-trunk-bg',
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        8,
                        0.75
                    ],
                    [
                        18,
                        11
                    ],
                    [
                        20,
                        15
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(142, 55%, 50%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 55%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 50%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 35%)'
                    ]
                ]
            },
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        7,
                        0
                    ],
                    [
                        9,
                        1
                    ],
                    [
                        18,
                        13
                    ],
                    [
                        20,
                        18
                    ]
                ]
            },
            'line-opacity': 1
        }
    },
    {
        'id': 'traffic-motorway',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'ref': 'traffic-motorway-bg',
        'paint': {
            'line-width': {
                'base': 1.5,
                'stops': [
                    [
                        6,
                        0.5
                    ],
                    [
                        9,
                        1.5
                    ],
                    [
                        18,
                        14
                    ],
                    [
                        20,
                        18
                    ]
                ]
            },
            'line-color': {
                'base': 1,
                'type': 'categorical',
                'property': 'congestion',
                'stops': [
                    [
                        'low',
                        'hsl(142, 55%, 50%)'
                    ],
                    [
                        'moderate',
                        'hsl(30, 100%, 55%)'
                    ],
                    [
                        'heavy',
                        'hsl(355, 100%, 50%)'
                    ],
                    [
                        'severe',
                        'hsl(355, 70%, 35%)'
                    ]
                ]
            },
            'line-opacity': 1,
            'line-offset': {
                'base': 1.5,
                'stops': [
                    [
                        7,
                        0
                    ],
                    [
                        9,
                        1.2
                    ],
                    [
                        11,
                        1.2
                    ],
                    [
                        18,
                        10
                    ],
                    [
                        20,
                        15.5
                    ]
                ]
            }
        }
    },
    {
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,

        'paint': {
            'fill-extrusion-color': "#43CBFF",

// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
            'fill-extrusion-height': 9,
            'fill-extrusion-base': 9,
            'fill-extrusion-opacity': 0.6
        }
    },
    {
        'id': 'zhengxing_road',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'zheng_xing',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': 'guangdong_road',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': 'guang_dong',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '1',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '1',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '2',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '2',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '3',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '3',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '4',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '4',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '5',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '5',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '6',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '6',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '7',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '7',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '8',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '8',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '9',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '9',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '10',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '10',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '11',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '11',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '12',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '12',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '13',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '13',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '14',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '14',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '15',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '15',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '16',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '16',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '17',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '17',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '18',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '18',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '19',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '19',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '20',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '17',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '21',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '21',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '22',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '22',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '23',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '23',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '24',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '24',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '25',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '25',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '26',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '26',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    },
    {
        'id': '27',
        'type': 'line',
        'metadata': {
            'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
        },
        'source': '27',
        'minzoom': 6,
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#CD0000',
            'line-width': 6,

        }
    }



];

function addLayers(style, layers, before) {
    for (var i = 0; i < style.layers.length; i++) {
        var layer = style.layers[i];
        if (before === layer.id) {
            var newLayers = style.layers.slice(0, i).concat(layers).concat(style.layers.slice(i));
            return Object.assign({}, style, {
                layers: newLayers
            });
        }
    }

    return style;
}


/**
 * Create a new [Mapbox GL JS plugin](https://www.mapbox.com/blog/build-mapbox-gl-js-plugins/) that allows you to hide and show
 * traffic layers in your map and an optional toggle button.
 * @constructor
 * @param {object} options - Options to configure the plugin.
 * @param {boolean} [options.showTraffic=false] - Show or hide traffic overlay by default.
 * @param {boolean} [options.showTrafficButton=true] - Show a toggle button to turn traffic on and off.
 * @param {RegExp} [options.trafficSource=/mapbox-traffic-v\d/] - The traffic source regex used to determine whether a layer displays traffic or not.
 */
function MapboxTraffic(options) {
    if (!(this instanceof MapboxTraffic)) {
        throw new Error('MapboxTraffic needs to be called with the new keyword');
    }

    this.options = Object.assign({
        showTraffic: false,
        showTrafficButton: true,
        trafficSource: /mapbox-traffic-v\d/
    }, options);

    this.render = this.render.bind(this);
    this.toggleTraffic = this.toggleTraffic.bind(this);
    this._hideTraffic = this._hideTraffic.bind(this);
    this._showTraffic = this._showTraffic.bind(this);
    this._hasTraffic = this._hasTraffic.bind(this);
    this._toggle = new TrafficButton({
        show: this.options.showTrafficButton,
        onToggle: this.toggleTraffic.bind(this)
    });
}

MapboxTraffic.prototype._hasTraffic = function () {
    var style = this._map.getStyle();
    var trafficSource = this.options.trafficSource;
    return Object.keys(style.sources).filter(function (sourceName) {
        return trafficSource.test(sourceName);
    }).length > 0;
};

/**
 * Toggle visibility of traffic layer.
 */
MapboxTraffic.prototype.toggleTraffic = function () {
    this.options.showTraffic = !this.options.showTraffic;
    this.render();
};

MapboxTraffic.prototype.render = function () {
    if (!this._hasTraffic()) {
        this._map.addSource('mapbox://mapbox.mapbox-traffic-v1', {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-traffic-v1'
        });
        var geojson_zhengxing = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.06778159853673, 30.506481556016933],
                        [104.06779159980483, 30.506091656683125],
                        [104.0678016024437, 30.505671765887428],
                        [104.068081141107, 30.50571140682007],
                        [104.06808113609829, 30.50582137496471],
                        [104.06808113564293, 30.505831372068172],
                        [104.06808113336623, 30.50588135758397],
                        [104.06808113017885, 30.505951337301912],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112972351, 30.505961334404077],
                        [104.06808112790216, 30.50600132281173],
                        [104.06808112334872, 30.50610129382391],
                        [104.06808111560785, 30.506271244521702],
                        [104.06807112238987, 30.50648119593069],
                        [104.06778160491085, 30.506341596650127],
                        [104.06779160526831, 30.505971691466108],
                        [104.06904955159901, 30.506320052650327],
                        [104.06905953574301, 30.50632004072657],
                        [104.0691294258021, 30.50629996318565],
                        [104.06924923770649, 30.50626982951309],
                        [104.06938901894381, 30.50623967290729],
                        [104.06953878554577, 30.5062095054459],
                        [104.06967856881495, 30.50617935061789],
                        [104.06978839905248, 30.50615922853425],
                        [104.06984830666893, 30.506149161903238],
                        [104.06997810704777, 30.50612901759477],
                        [104.07016781730948, 30.50608881113956],
                        [104.0703774985332, 30.506058580677692],
                        [104.07057719706171, 30.506028363407697],
                        [104.07074694214168, 30.50600817851851],
                        [104.07091668867577, 30.505987994902657],
                        [104.07111639127102, 30.505987773696376],
                        [104.07121624332436, 30.50598766375523],
                        [104.07123621379552, 30.50598764181998],
                        [104.07126616954004, 30.505987608950228],
                        [104.07140596407044, 30.505977458981857]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('zheng_xing', {
            type: 'geojson',

            data: geojson_zhengxing
        });
        var geojson_guangdong = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.03691702076496, 30.4501941153442],
                        [104.03656807139448, 30.45008498896895],
                        [104.03627894635534, 30.449965722344523],
                        [104.03599979402142, 30.449846433750768],
                        [104.03565085328236, 30.449787305183683],
                        [104.03523212700944, 30.449778341121092],
                        [104.03476355876828, 30.44977950382209],
                        [104.03430496437227, 30.449840633878487],
                        [104.0339360989624, 30.449911542104736],
                        [104.03369683660988, 30.449972129865913],

                        [104.04761712335986, 30.450449964274203],
                        [104.04720816863602, 30.45077073732128],
                        [104.04674935268093, 30.451061627937694],
                        [104.04627060064549, 30.451292582326108],
                        [104.04578188532093, 30.45150357079709],
                        [104.04530315561512, 30.451654560372557],
                        [104.04477457137831, 30.45176567546157],
                        [104.04426594534495, 30.45184676373836],
                        [104.04374735770399, 30.451907887631315],
                        [104.04064605874704, 30.451424999070287],
                        [104.04032697812129, 30.45129576753177],
                        [104.03969879879385, 30.451047288582732],
                        [104.03923016658008, 30.45085843232533],
                        [104.03875157189951, 30.450659608934625],
                        [104.03827298494689, 30.450470790337448],
                        [104.0377844356085, 30.45028200272357],
                        [104.03686718150809, 30.44993429713745],
                        [104.03658802179577, 30.44985499426961]
                            [104.035182297712, 30.44935856267363],
                        [104.03557111409893, 30.4493675998315],
                        [104.03480345536234, 30.449359502785192],
                        [104.03441464659927, 30.44940046260221]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('guang_dong', {
            type: 'geojson',

            data: geojson_guangdong
        });

        var geojson1 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07359276094955, 30.508404473544434],
                        [104.0735927572993, 30.50848445016241],
                        [104.07359275456156, 30.508544432621694],
                        [104.07359274771723, 30.508694388754225],
                        [104.0735927385914, 30.508894330229364],
                        [104.0735927276403, 30.50913425994689],
                        [104.07358272843165, 30.509414187796946],
                        [104.07358271565515, 30.509694105649995],
                        [104.07349283571236, 30.50974418044267],
                        [104.07349285396393, 30.509344297791447],
                        [104.07349287084641, 30.508974406197037],
                        [104.07350287502787, 30.50858451035575]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('1', {
            type: 'geojson',

            data: geojson1
        });

        var geojson2 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.06915928088051, 30.50843930437466],
                        [104.06927908293748, 30.50862910660831],
                        [104.06941885435565, 30.50881888589992],
                        [104.06955862538649, 30.509038657229056],
                        [104.06969839785307, 30.50924843230012],
                        [104.06986812356466, 30.50948816466895],
                        [104.07000789774807, 30.509707938615488],
                        [104.07013768959156, 30.50989773363262],
                        [104.07026748273815, 30.510077532295718],
                        [104.07044719769046, 30.51032725446921],
                        [104.07059696222895, 30.51051702938525],
                        [104.07074672789784, 30.51070680525631],
                        [104.0708665413385, 30.51085662723055],
                        [104.07099633834015, 30.511056424003392],
                        [104.07108619686292, 30.51122627441627]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('2', {
            type: 'geojson',

            data: geojson2
        });

        var geojson3 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07883678098992, 30.498812640411078],
                        [104.07884678153437, 30.498562703487195],
                        [104.07886677852707, 30.498152804088374],
                        [104.07888677554027, 30.497742904539948],
                        [104.0789167704132, 30.49714305072175],
                        [104.07893676884798, 30.496703159223085],
                        [104.0789667578592, 30.496233268445202],
                        [104.07898675132034, 30.49590334582316],
                        [104.0790067525676, 30.49540347060194],
                        [104.07904674050602, 30.494723630365392],
                        [104.07906673404922, 30.49439370731864],
                        [104.0790967196063, 30.494003793406762],
                        [104.07910671845656, 30.49379384429501],
                        [104.07910672028368, 30.49375385540105],
                        [104.07910672074046, 30.493743858177325],
                        [104.079106721654, 30.493723863729553],
                        [104.07911671822544, 30.49356390069284],
                        [104.07913670772957, 30.493323952383342],
                        [104.07914671116801, 30.493014030841607],
                        [104.07916670709768, 30.49263412114944],
                        [104.07920669125356, 30.4920442544942],
                        [104.07923667337238, 30.491734317811762],
                        [104.07927665401812, 30.491224428747863],
                        [104.07932662594447, 30.49067454313456]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('3', {
            type: 'geojson',

            data: geojson3
        });
        var geojson4 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.0182359453455, 30.498391522188893],
                        [104.01832561567308, 30.49875116319175],
                        [104.01838539377096, 30.49904090972815],
                        [104.0184252469028, 30.499210747341362],
                        [104.01843520985972, 30.49926070462215],
                        [104.0184451723775, 30.49932065907191],
                        [104.01846509962378, 30.499390582121922],
                        [104.0184750612651, 30.499470530905608],
                        [104.0185248756744, 30.499730314444914],
                        [104.01858465885029, 30.49991009210543],
                        [104.01866436280041, 30.500309750268308],
                        [104.01871417871328, 30.500539542279824],
                        [104.0222315632215, 30.511026546566463],
                        [104.02237107086931, 30.511386050424058],
                        [104.02256040508972, 30.511835388907045],
                        [104.02265008970257, 30.51205507371593],
                        [104.02283942601572, 30.512484418893372]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('4', {
            type: 'geojson',

            data: geojson4
        });
        var geojson5 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.0240760022092, 30.495275943594518],
                        [104.02367734801581, 30.495287042071038],
                        [104.02327869674272, 30.495318138316783],
                        [104.02290994799965, 30.49533915744769],
                        [104.02255116845464, 30.49536015155984],
                        [104.02224222165071, 30.495381008913732],
                        [104.02195320880449, 30.495401812322754],
                        [104.02168412950456, 30.495422561424675],
                        [104.02146488117344, 30.49543317461021],
                        [104.02129546263386, 30.49544364844039]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('5', {
            type: 'geojson',

            data: geojson5
        });
        var geojson6 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07883724732778, 30.488605474571056],
                        [104.07921684042499, 30.488545206739012],
                        [104.07958645097679, 30.488494949908105],
                        [104.08005596671822, 30.488424634322147],
                        [104.08049552387115, 30.488354349117536],
                        [104.08093509052809, 30.48829406991714],
                        [104.0813247150692, 30.48823383159751],
                        [104.08176430097862, 30.488163571586238],
                        [104.08200407939457, 30.488123433936554],
                        [104.0821139789023, 30.488103372168602],
                        [104.08218391515236, 30.48809333240403],
                        [104.08219390600054, 30.488093326352853],
                        [104.08234377025484, 30.488073241566497],
                        [104.08226383156996, 30.48832322153623],
                        [104.08180425302656, 30.48839348404977],
                        [104.08142460930272, 30.48845370751501],
                        [104.08103498321225, 30.48850394678612],
                        [104.08078522665191, 30.48854410160727],
                        [104.08039561340628, 30.488594352133145],
                        [104.07982619196501, 30.488684726006518],
                        [104.07936667163216, 30.488745041845288],
                        [104.07926712545246, 30.481137161264638],
                        [104.07927709196971, 30.481637021241465],
                        [104.07928705940478, 30.48211688629497],
                        [104.07929702821428, 30.4825667591187],
                        [104.07929701451584, 30.48286667912857],
                        [104.07930698332977, 30.483316551620913],
                        [104.07931695260504, 30.483756426592933],
                        [104.07932692051509, 30.484226293333077],
                        [104.07933688249321, 30.484826124930787],
                        [104.07934685132578, 30.485275996563097],
                        [104.07935681879299, 30.48575585990891],
                        [104.079376774749, 30.486255710303826],
                        [104.07940672013771, 30.486755553158268],
                        [104.07941669631144, 30.48704546732112],
                        [104.07944664450096, 30.487485326120964],
                        [104.07948658356008, 30.487895185649233],
                        [104.0795265185902, 30.48839502058005],
                        [104.07955647288506, 30.48870491438305]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('6', {
            type: 'geojson',

            data: geojson6
        });
        var geojson7 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.0453108497012, 30.502341311177226],
                        [104.04496178881772, 30.50230207492825],
                        [104.04461273323349, 30.50225284578921],
                        [104.04433349179024, 30.50222346266161],
                        [104.04411409024479, 30.50219395107553],
                        [104.04397447210519, 30.50217426300724],
                        [104.04387474558727, 30.50215448785941],
                        [104.04383485472948, 30.502154575608287],
                        [104.04379496438341, 30.50214466627099],
                        [104.04374510097635, 30.50214477610192],
                        [104.04359551223641, 30.502125111823386],
                        [104.04347584205185, 30.502105382094086],
                        [104.0432365029023, 30.502075921239136],
                        [104.04313677879948, 30.50206614574245],
                        [104.04298719359056, 30.502046484558228],
                        [104.04277777538778, 30.502026957883853],
                        [104.04258830331369, 30.50200738794827],
                        [104.0423888609126, 30.501977844506587],
                        [104.04217944795832, 30.501948324896286],
                        [104.04195009269868, 30.50191885189832],
                        [104.04173071133054, 30.501889357994546],
                        [104.04160107739322, 30.50187965559289],
                        [104.04150135951424, 30.501869885551553],
                        [104.04136175538088, 30.50185020975789],
                        [104.04119223686621, 30.50183060307403],
                        [104.04097286174412, 30.501801114645037],
                        [104.04075348841437, 30.501771627787072],
                        [104.04049423108113, 30.501742234687338],
                        [104.04023497622966, 30.50171284376332],
                        [104.04013526341456, 30.50170307816128],
                        [104.03994581056335, 30.501673527537843],
                        [104.03986604121657, 30.5016637163421],
                        [104.03962673456816, 30.50163428397528],
                        [104.03962673456816, 30.50163428397528],
                        [104.03963670569294, 30.501634260644174],
                        [104.03963670569294, 30.501634260644174],
                        [104.03963670569294, 30.501634260644174]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('7', {
            type: 'geojson',

            data: geojson7
        });
        var geojson8 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.03048514628594, 30.490350096922878],
                        [104.03043531776275, 30.490080300807435],
                        [104.03038548886678, 30.48982050194788],
                        [104.02991707967483, 30.487852263867932],
                        [104.0297875143594, 30.487452712229718],
                        [104.02964798298751, 30.48702319517293],
                        [104.02948851962736, 30.486523749804807],
                        [104.0293091223249, 30.48600436277142],
                        [104.02913969410824, 30.48547495265264],
                        [104.02896029946892, 30.48493557202097],
                        [104.02878090662388, 30.484376197264318],
                        [104.02860151379039, 30.483836817640885],
                        [104.028412155216, 30.48327747035825],
                        [104.03048514628594, 30.490350096922878],
                        [104.03043531776275, 30.490080300807435],
                        [104.03038548886678, 30.48982050194788],
                        [104.02991707967483, 30.487852263867932],
                        [104.0297875143594, 30.487452712229718],
                        [104.02964798298751, 30.48702319517293],
                        [104.02948851962736, 30.486523749804807],
                        [104.0293091223249, 30.48600436277142],
                        [104.02913969410824, 30.48547495265264],
                        [104.02896029946892, 30.48493557202097],
                        [104.02878090662388, 30.484376197264318],
                        [104.02860151379039, 30.483836817640885],
                        [104.028412155216, 30.48327747035825],
                        [104.02886066373041, 30.48401608256701],
                        [104.02902012380993, 30.48452552398642],
                        [104.0291895523464, 30.48503493947545],
                        [104.02935898125112, 30.48555435273201],
                        [104.02952840963829, 30.48610375834641]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('8', {
            type: 'geojson',

            data: geojson8
        });
        var geojson9 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.02334878071377, 30.48807993898472],
                        [104.02397665686216, 30.48808819893262],
                        [104.02461450907481, 30.48809643990411],
                        [104.02494340577, 30.488095537756628],
                        [104.02540187235266, 30.4880942841976],
                        [104.02583044376884, 30.488093116640364],
                        [104.02625901991811, 30.48809195324688],
                        [104.02668760086644, 30.48809079407453],
                        [104.02713612102274, 30.48808958556951],
                        [104.02762451578413, 30.48808827504682],
                        [104.02810295005327, 30.488076999530076],
                        [104.02860132535234, 30.48807567395236],
                        [104.02889038621224, 30.488074907918065],
                        [104.0293189980509, 30.488073775903093],
                        [104.02974761515007, 30.488072648510972],
                        [104.02334878071377, 30.48807993898472],
                        [104.02397665686216, 30.48808819893262],
                        [104.02461450907481, 30.48809643990411],
                        [104.02494340577, 30.488095537756628],
                        [104.02540187235266, 30.4880942841976],
                        [104.02583044376884, 30.488093116640364],
                        [104.02625901991811, 30.48809195324688],
                        [104.02668760086644, 30.48809079407453],
                        [104.02713612102274, 30.48808958556951],
                        [104.02762451578413, 30.48808827504682],
                        [104.02810295005327, 30.488076999530076],
                        [104.02860132535234, 30.48807567395236],
                        [104.02889038621224, 30.488074907918065],
                        [104.0293189980509, 30.488073775903093],
                        [104.02974761515007, 30.488072648510972]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('9', {
            type: 'geojson',

            data: geojson9
        });
        var geojson10 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.06822160203372, 30.49057550369597],
                        [104.06824158816416, 30.49016559156637],
                        [104.0682615743145, 30.489755679286706],
                        [104.06829154333772, 30.489365749132556],
                        [104.0683015448545, 30.488975843364027],
                        [104.06833151575796, 30.48854592385674],
                        [104.06834151911491, 30.48811602866756],
                        [104.0683615053648, 30.487706115637717],
                        [104.06838149254476, 30.487276207881195],
                        [104.06840148110979, 30.48681630807932],
                        [104.0684214701498, 30.4863464107865],
                        [104.06844145875462, 30.48588651059348],
                        [104.06845146398592, 30.485416625086003],
                        [104.06847145171035, 30.484976719116073],
                        [104.06849144218495, 30.48447682907468],
                        [104.06851143176935, 30.48399693344427],
                        [104.06854141390798, 30.483327076241483],
                        [104.06855142146351, 30.48280720291636],
                        [104.0685714120174, 30.482307311864854],
                        [104.0685814191324, 30.48179743536805],
                        [104.06860140880596, 30.481317538535986],
                        [104.06861141502544, 30.48082765625545],
                        [104.06863140427369, 30.480357756343786],
                        [104.06864140959776, 30.47988786833263]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('10', {
            type: 'geojson',

            data: geojson10
        });
        var geojson11 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.0436571401348, 30.462235594624747],
                        [104.0433180916227, 30.4618064505468],
                        [104.04294912727585, 30.461447359735203],
                        [104.04260011039892, 30.461138216408376],
                        [104.04224112472971, 30.460859092213912],
                        [104.04194197449725, 30.460609829358106],
                        [104.04174254797056, 30.46033035010438],
                        [104.04166278486124, 30.46006059732645],
                        [104.0416927103981, 30.459840582992424],
                        [104.04173260967279, 30.459580555732607],
                        [104.04164287336569, 30.459340818159326],
                        [104.04153319457336, 30.45908113108425],
                        [104.04152323394078, 30.458831214548656],
                        [104.04157310570784, 30.458551168953107],
                        [104.04169278210944, 30.458240971902672],
                        [104.04177257130966, 30.45793086575536],
                        [104.04187228898806, 30.457970629863897],
                        [104.04175260998078, 30.45832081659247],
                        [104.04163293061994, 30.458690998820103],
                        [104.04159303015074, 30.45898101914995],
                        [104.04169273504937, 30.459290716965285],
                        [104.04179243942448, 30.45962041014204],
                        [104.04175253736987, 30.459940422676894],
                        [104.04174255469404, 30.46018038674462],
                        [104.04186220944432, 30.46037006879657],
                        [104.04200180875549, 30.46055970615777],
                        [104.0422211814247, 30.460839142082143],
                        [104.04250039131537, 30.461068457356202],
                        [104.0427995479138, 30.46131772568893],
                        [104.04309870705015, 30.461586992064994]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('11', {
            type: 'geojson',

            data: geojson11
        });
        var geojson12 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.06564564560452, 30.497586870102282],
                        [104.06568556545784, 30.497806754578534],
                        [104.065735466976, 30.4980466200694],
                        [104.06579534977764, 30.498316463803484],
                        [104.065845252929, 30.4985263378802],
                        [104.0658951571123, 30.49871621767181],
                        [104.06590513878231, 30.498736198725272],
                        [104.06590513787269, 30.49875619307353],
                        [104.0659151195476, 30.498776174130487],
                        [104.0659250989533, 30.49884614105827],
                        [104.06595504265766, 30.49893607577846],
                        [104.06597500424206, 30.49901602661869],
                        [104.06594505186649, 30.49911603813621],
                        [104.06574539945068, 30.499146296024342],
                        [104.06531615360686, 30.49920685757505],
                        [104.06485697059023, 30.49926746826209],
                        [104.06434788829277, 30.49933815491468],
                        [104.06381885551977, 30.49940888101348],

                        [104.065695545206, 30.497866724292273],
                        [104.06575542698076, 30.49815656233187],
                        [104.06580533003431, 30.4983664363561],
                        [104.06582529192669, 30.49843638993557],
                        [104.06583527219802, 30.498486362495107],
                        [104.06588517590201, 30.498686239447583],
                        [104.06594506141796, 30.49890609753499],
                        [104.06621459254688, 30.49892573500197],
                        [104.06634436942112, 30.498905569947553],
                        [104.0665639930904, 30.49888528837037],
                        [104.06681356867011, 30.498854972989626],
                        [104.06711306316713, 30.49882459640433],
                        [104.06746247881293, 30.49879416056909],
                        [104.06759226326052, 30.498783999717922],
                        [104.06763219742037, 30.498773952329486],
                        [104.06765216430249, 30.49877392724823]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('12', {
            type: 'geojson',

            data: geojson12
        });
        var geojson13 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.06425745838028, 30.512394497440987],
                        [104.06462679003698, 30.512334000142268],
                        [104.06448704453622, 30.512304203230066],
                        [104.06443713562773, 30.512294275752375],
                        [104.06432733727593, 30.51225444100555],
                        [104.06474657291504, 30.512353828424715],
                        [104.06461680808636, 30.512334013986248],
                        [104.06436726408786, 30.51226438219976],
                        [104.06479648257904, 30.51236375656359],
                        [104.06468668138822, 30.512343914206657],
                        [104.06461680808636, 30.512334013986248],
                        [104.06453695356652, 30.5123141308143],
                        [104.06442715376969, 30.512294289677435],
                        [104.0642674406103, 30.512384486405374],
                        [104.06464675395284, 30.512333972467125],
                        [104.06444711749066, 30.512294261831588],
                        [104.06416762989686, 30.512234670988878],
                        [104.06402788116371, 30.512344835367518],
                        [104.06467669940837, 30.51234392802501],
                        [104.06444711749066, 30.512294261831588]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('13', {
            type: 'geojson',

            data: geojson13
        });
        var geojson14 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.0303854906472, 30.48978051289084],
                        [104.03033566137829, 30.489530711284903],
                        [104.03028583129156, 30.489300904219647],
                        [104.03023600172202, 30.489061099894236],
                        [104.03018617266953, 30.488811298301464],
                        [104.03011640989187, 30.48851156246128],
                        [104.0300167450845, 30.488171915810984],
                        [104.02825269739678, 30.48277802803189],
                        [104.02811317249063, 30.48233851696693],
                        [104.02796368071648, 30.481899032787428],
                        [104.02782415691419, 30.481459522315607],
                        [104.02767466676191, 30.48101004144287],
                        [104.02751521037851, 30.480550590260915],
                        [104.02735575556841, 30.48007114475361],
                        [104.0271963032155, 30.4795517101568],
                        [104.02703685065303, 30.47905227063565],
                        [104.02681760370449, 30.478383037276878],
                        [104.02670798004064, 30.478063416924186],
                        [104.02657842617651, 30.477663871533323],
                        [104.02648873454659, 30.47740418197741],
                        [104.02641897532366, 30.47718442815644],
                        [104.02633925058923, 30.476934709210127],
                        [104.0262595260198, 30.476684990348172],
                        [104.02590076549318, 30.47560624483001],
                        [104.02577121389272, 30.475216698273098],
                        [104.0256416627202, 30.47482715194489],
                        [104.0253426943387, 30.47405816622657],
                        [104.02506365395591, 30.473459083632783],
                        [104.02455539827207, 30.47256070868593],
                        [104.02409697605884, 30.47177217298577],
                        [104.02365849063573, 30.47100358090559],
                        [104.02342928406122, 30.470604317609524],
                        [104.0232000791688, 30.47019505779313],
                        [104.0226818796847, 30.46930672528109]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('14', {
            type: 'geojson',

            data: geojson14
        });
        var geojson15 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.0499389189922, 30.501781907385265],
                        [104.04943019836391, 30.50158297705729],
                        [104.04990901958445, 30.50120213214897],
                        [104.04992895236849, 30.50159198138877],
                        [104.04994888516882, 30.501981830491754],
                        [104.0499688197905, 30.502331690903805],
                        [104.04999872965095, 30.502681531469296],
                        [104.05015832566386, 30.502861164565683],
                        [104.0502979788228, 30.502890880842557],
                        [104.05044760778051, 30.50293057541275],
                        [104.05066706526465, 30.502990128588433],
                        [104.05094637807726, 30.503059564352533],
                        [104.05125562063068, 30.50314893951672],
                        [104.05152496467657, 30.503218400666608],
                        [104.05175440837336, 30.50327794371747],
                        [104.05192399886499, 30.50331760851183],
                        [104.05206366224786, 30.503357331259192],
                        [104.05219335076227, 30.503387076530377],
                        [104.05236294406134, 30.503436741304263],
                        [104.05253253907604, 30.503476410055885],
                        [104.05269215896374, 30.5035160986288],
                        [104.05290166143291, 30.503575689217637],
                        [104.0531111662944, 30.50362528437748],
                        [104.05328076691387, 30.50366495803288],
                        [104.05340048523495, 30.50370472496227],
                        [104.0534802981043, 30.503724571807947],
                        [104.05356011125713, 30.503744418901572],
                        [104.05361997153395, 30.503754305822426],
                        [104.05367983151828, 30.503774190007395],
                        [104.053729715262, 30.50378409551876]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('15', {
            type: 'geojson',

            data: geojson15
        });
        var geojson16 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07898660193709, 30.499172425628466],
                        [104.07898659279988, 30.499372369001414],
                        [104.07898658229205, 30.499602303831],
                        [104.07897657893372, 30.499912223407925],
                        [104.07897656157259, 30.50029211550201],
                        [104.07897654284055, 30.5007019989157],
                        [104.07880670674707, 30.50115199893062],
                        [104.07881671550032, 30.500722113817343],
                        [104.078816732861, 30.500342221886157],
                        [104.07881675067827, 30.49995233264916],
                        [104.07882675669487, 30.49958243002096],
                        [104.07882677405485, 30.49920253765777],
                        [104.07910646857228, 30.499262310517157],
                        [104.07909646104008, 30.499662204631978],
                        [104.07908645351282, 30.50006209859175],
                        [104.07908643523727, 30.500461984942717],
                        [104.07908641741841, 30.50085187398129]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('16', {
            type: 'geojson',

            data: geojson16
        });
        var geojson17 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07357271280097, 30.51005400984095],
                        [104.07357268450941, 30.510673827443505],
                        [104.07356268622314, 30.51093376076799],
                        [104.07356267618395, 30.511153695897196],
                        [104.07356266842638, 30.511323645736717],
                        [104.07356266112507, 30.51148359850055],
                        [104.07356265154205, 30.511693536464357],
                        [104.07355265280424, 30.511963466571174]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('17', {
            type: 'geojson',

            data: geojson17
        });
        var geojson18 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.05829932170401, 30.509604429267696],
                        [104.05842905183444, 30.509524238728126],
                        [104.05860867897944, 30.50942397287293],
                        [104.05881824604248, 30.50930366534441],
                        [104.05903779489321, 30.50917334634594],
                        [104.05922740698375, 30.509063071763574],
                        [104.05940704086036, 30.50896281175539],
                        [104.05962659579474, 30.508832498038483],
                        [104.0598561331183, 30.50869217337081],
                        [104.06003577232808, 30.50859191799447],
                        [104.06018547313988, 30.50850170814425],
                        [104.06021541352051, 30.50848166686944],
                        [104.06024535348986, 30.50847162270875],
                        [104.06024535348986, 30.50847162270875],
                        [104.06027529395556, 30.508451581507806],
                        [104.06035513480042, 30.508411467922702],
                        [104.06033518182244, 30.508261543037705],
                        [104.06020545048293, 30.50811179064973],
                        [104.06005576087296, 30.50795207338139],
                        [104.0598761351034, 30.50775241618506],
                        [104.05970648953974, 30.50757273854473],
                        [104.05959671976471, 30.507452948775672],
                        [104.05942707643652, 30.50727327304145],
                        [104.05930732960763, 30.507133506395878],
                        [104.05919756144192, 30.50702371547461]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('18', {
            type: 'geojson',

            data: geojson18
        });
        var geojson19 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.05625361276331, 30.512367080860663],
                        [104.05617379354211, 30.512267249121013],
                        [104.05611392954376, 30.512187376957197],
                        [104.05606404270156, 30.51212748161943],
                        [104.05600417900328, 30.512047609707604],
                        [104.05594431501557, 30.51197773497523],
                        [104.05591438330944, 30.511937799139577],
                        [104.05580463376774, 30.511798032731107],
                        [104.05574477077722, 30.511718161413803],
                        [104.05562504437978, 30.51157841328203],
                        [104.05558513587644, 30.51152849834517],
                        [104.05550531908678, 30.51142866865439],
                        [104.05540554873282, 30.511298883359057],
                        [104.055345686375, 30.51122901000379],
                        [104.0552858250851, 30.511139142684804],
                        [104.05520600983158, 30.511029316853623],
                        [104.05514614937292, 30.51092945279598],
                        [104.05505635763069, 30.510809648119977],
                        [104.0549964966716, 30.51072977850559],
                        [104.05497654365809, 30.51068982592402],
                        [104.05495658975724, 30.51066986746771],
                        [104.05497654320543, 30.510699822979213],
                        [104.05496656625276, 30.510689843749237],
                        [104.05496656625276, 30.510689843749237],
                        [104.05496656670543, 30.51067984669395],
                        [104.05496656670543, 30.51067984669395],
                        [104.05496656670543, 30.51067984669395]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('19', {
            type: 'geojson',

            data: geojson19
        });
        var geojson20 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.05068676345483, 30.508588467987394],
                        [104.05053713072269, 30.50859875767677],
                        [104.05044734685036, 30.5087089014819],
                        [104.05044734594738, 30.508728895631922],
                        [104.0504473450444, 30.50874888978155],
                        [104.05044734368995, 30.50877888100523],
                        [104.05044734368995, 30.50877888100523],
                        [104.05045731730084, 30.508818849734546],
                        [104.05045731414042, 30.508888829250196],
                        [104.05046728549809, 30.5089787833422],
                        [104.05047725731144, 30.50905874035831],
                        [104.05047725550543, 30.50909872864399],
                        [104.05048722777452, 30.5091686885838],
                        [104.05050716826176, 30.509398582078123],
                        [104.05052710966885, 30.509608481402612],
                        [104.05054705018969, 30.509838374826003],
                        [104.05056699072728, 30.510068268211665],
                        [104.05059690495187, 30.51033813028076],
                        [104.05061684553158, 30.510568023589286],
                        [104.05063678928907, 30.510727937477732],
                        [104.05059690314569, 30.510378118515398],
                        [104.05056699117884, 30.510058271150065],
                        [104.05053708015294, 30.50971842958652],
                        [104.05050716735876, 30.509418576214376],
                        [104.05049720004784, 30.509238648522487],
                        [104.05048722687151, 30.50918868272465],
                        [104.05048722912905, 30.50913869737178],
                        [104.0504672841436, 30.509008774559003],
                        [104.05046728775557, 30.508928797978875],
                        [104.05046728775557, 30.508928797978875],
                        [104.05046728820706, 30.5089188009059]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('20', {
            type: 'geojson',

            data: geojson20
        });
        var geojson21 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.05100580787202, 30.51244671059895],
                        [104.05090606554899, 30.512136996156677],
                        [104.05082627615393, 30.511797252001692],
                        [104.05074648793531, 30.511437513876675],
                        [104.05066669998965, 30.511077775863022]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('21', {
            type: 'geojson',

            data: geojson21
        });
        var geojson22 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.05908779384235, 30.50691392503761],
                        [104.05899798531591, 30.50680410267052],
                        [104.05885828205105, 30.506674367682447],
                        [104.05874851665138, 30.50655458164189],
                        [104.05862877363434, 30.506414818238092],
                        [104.05852898754318, 30.506315011000474],
                        [104.05849905226, 30.506275071807647],
                        [104.05849905226, 30.506275071807647],
                        [104.058489073237, 30.506275088216853],
                        [104.058489073237, 30.506275088216853]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('22', {
            type: 'geojson',

            data: geojson22
        });
        var geojson23 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07357271280097, 30.51005400984095],
                        [104.07357268450941, 30.510673827443505],
                        [104.07356268622314, 30.51093376076799],
                        [104.07356267618395, 30.511153695897196],
                        [104.07356266842638, 30.511323645736717],
                        [104.07356266112507, 30.51148359850055],
                        [104.07356265154205, 30.511693536464357],
                        [104.07355265280424, 30.511963466571174]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('23', {
            type: 'geojson',

            data: geojson23
        });
        var geojson24 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [103.99443433259016, 30.458253372357394],
                        [103.99488267744582, 30.458272003186533]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('24', {
            type: 'geojson',

            data: geojson24
        });
        var geojson25 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.03548031867213, 30.47329195051914],
                        [104.03556007674068, 30.47328175639993],
                        [104.03558998590375, 30.473281682689013]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('25', {
            type: 'geojson',

            data: geojson25
        });
        var geojson26 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [104.07465147030425, 30.50580420386613],
                        [104.07450166579842, 30.50581434313089],
                        [104.074251993561, 30.50584457360803],
                        [104.07411217880859, 30.505854705862713],
                        [104.07384253839984, 30.50588496028871]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('26', {
            type: 'geojson',

            data: geojson26
        });
        var geojson27 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                         [104.02058921624693, 30.465633527252933],
                        [104.02043974423692, 30.465364017599],
                        [104.02028030759008, 30.46508453902215],
                        [104.02012087103205, 30.464815058351068],
                        [104.0199913296851, 30.46458548323709],
                        [104.01986178868368, 30.46435590837757],
                        [104.01975217713202, 30.464166267164416],
                        [104.019662495336, 30.46400656197937],
                        [104.0195927427449, 30.46388679026137],
                        [104.01951302574447, 30.46374705195231],
                        [104.0194133798945, 30.46356738043612],
                        [104.0193037693371, 30.463377739957565],
                        [104.0192041239047, 30.463198068746518],
                        [104.01911444265556, 30.46304836181581],
                        [104.0190247615658, 30.46289865500443],
                        [104.0189350806348, 30.462748948311805],
                        [104.0188553646781, 30.462609210772253],
                        [104.018795577572, 30.46250940644535],
                        [104.01878561320791, 30.462489439883967],
                        [104.01877564884585, 30.462469473323907],
                        [104.01876568404512, 30.462459504301467],
                        [104.01875571968692, 30.46243953774425],
                        [104.01873579053567, 30.462409602170595],
                        [104.01871586183277, 30.462369669065836],
                        [104.01865607488922, 30.4622698648597],
                        [104.018596288896, 30.46215006562691],
                        [104.01853650165053, 30.462060259062394],
                        [104.02044970893472, 30.465383984399985],
                        [104.02016073001178, 30.464884927859718],
                        [104.01989168286606, 30.46440581100975],
                        [104.019662495336, 30.46400656197937],
                        [104.01946320279451, 30.46365721617603],
                        [104.01933366318177, 30.463427642338313],
                        [104.01914433638753, 30.463098264112762],
                        [104.01897493954115, 30.462798822050342],
                        [104.01883543592872, 30.46256927763407],
                        [104.01870589704365, 30.46235970005273],
                        [104.01858632368959, 30.46215009417152],
                        [104.01848668009977, 30.46196042644671],
                        [104.01831728542207, 30.461660985974024],
                        [104.01814789041168, 30.46138154099372],
                        [104.01796853261732, 30.461062134868868],
                        [104.0177891741066, 30.460772721839646],
                        [104.01760981707537, 30.460463314148512],
                        [104.01743046107792, 30.46014390933177],
                        [104.01727103294331, 30.459884432778697],
                        [104.0171713913637, 30.459704764371928]
                    ],
                    "type": "LineString"
                }
            }]
        };
        this._map.addSource('27', {
            type: 'geojson',

            data: geojson27
        });



        var roadLayers = this._map.getStyle().layers.filter(function (layer) {
            return layer['source-layer'] === 'road';
        });
        var topRoadLayer = roadLayers[roadLayers.length - 1].id;
        var style = this._map.getStyle();
        var trafficStyle = addLayers(style, trafficLayers, topRoadLayer);
        // var temp = {
        //     'id': 'lines1',
        //     'type': 'line',
        //     'source': {
        //         'type': 'geojson',
        //         'data': {
        //             'type': 'FeatureCollection',
        //             'features': [{
        //                 'type': 'Feature',
        //                 'properties': {
        //                     'color': '#43CBFF' // red
        //                 },
        //                 'geometry': {
        //                     'type': 'LineString',
        //                     'coordinates': [
        //                         [104.0410418234, 30.4665799517],
        //
        //                         [104.0420418234, 30.4675799517]
        //                     ]
        //                 }
        //             }]
        //         }
        //     }
        // };
        // trafficStyle.push(temp);
        console.log(trafficStyle)
        this._map.setStyle(trafficStyle);
    }

    if (this.options.showTraffic) {
        this._showTraffic();
        this._toggle.setMapIcon();
    } else {
        this._hideTraffic();
        this._toggle.setTrafficIcon();
    }
};

MapboxTraffic.prototype._hideTraffic = function () {
    var style = this._map.getStyle();
    var source = this.options.trafficSource;
    style.layers.forEach(function (layer) {
        if (source.test(layer['source'])) {
            layer['layout'] = layer['layout'] || {};
            layer['layout']['visibility'] = 'none';
        }
    });
    this._map.setStyle(style);
};

MapboxTraffic.prototype._showTraffic = function () {
    var style = this._map.getStyle();
    var source = this.options.trafficSource;
    style.layers.forEach(function (layer) {
        if (source.test(layer['source'])) {
            layer['layout'] = layer['layout'] || {};
            layer['layout']['visibility'] = 'visible';
        }
    });
    this._map.setStyle(style);
};

MapboxTraffic.prototype.onAdd = function (map) {
    this._map = map;
    map.on('load', this.render);
    return this._toggle.elem;
};

MapboxTraffic.prototype.onRemove = function () {
    this._map.off('load', this.render);

    var elem = this._toggle.elem;
    elem.parentNode.removeChild(elem);
    this._map = undefined;
};

function container(child, show) {
    var container = document.createElement('div');
    container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    container.appendChild(child);
    if (!show) {
        container.style.display = 'none';
    }
    return container;
}

function button() {
    var btn = document.createElement('button');
    btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-traffic';
    btn.type = 'button';
    btn['aria-label'] = 'Inspect';
    return btn;
}

function TrafficButton(options) {
    options = Object.assign({
        show: true,
        onToggle: function () {
        }
    }, options);

    this._btn = button();
    this._btn.onclick = options.onToggle;
    this.elem = container(this._btn, options.show);
}

TrafficButton.prototype.setTrafficIcon = function () {
    this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-traffic';
};

TrafficButton.prototype.setMapIcon = function () {
    this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-map';
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = MapboxTraffic;
} else {
    window.MapboxTraffic = MapboxTraffic;
}
