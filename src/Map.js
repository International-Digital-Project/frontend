import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MyMapComponent = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      const map = L.map('map').setView([63.835109, 23.150805], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      const geoJsonData = {
        "type": "FeatureCollection",
        "metadata": {
          "attribution": "openrouteservice.org | OpenStreetMap contributors",
          "service": "routing",
          "timestamp": 1698965496565,
          "query": {
            "coordinates": [
              [
                23.151588,
                63.834679
              ],
              [
                23.116896,
                63.836034
              ]
            ],
            "profile": "driving-car",
            "format": "json"
          },
          "engine": {
            "version": "7.1.0",
            "build_date": "2023-07-09T01:31:50Z",
            "graph_date": "2023-10-29T10:41:48Z"
          }
        },
        "features": [
          {
            "bbox": [
              23.116951,
              63.834714,
              23.15167,
              63.836217
            ],
            "type": "Feature",
            "properties": {
              "transfers": 0,
              "fare": 0,
              "segments": [
                {
                  "distance": 1986.3,
                  "duration": 252.8,
                  "steps": [
                    {
                      "distance": 199.8,
                      "duration": 36,
                      "type": 11,
                      "instruction": "Head northwest on Vidnäsinkatu",
                      "name": "Vidnäsinkatu",
                      "way_points": [
                        0,
                        5
                      ]
                    },
                    {
                      "distance": 164.1,
                      "duration": 29.5,
                      "type": 0,
                      "instruction": "Turn left onto Jungsborginkatu",
                      "name": "Jungsborginkatu",
                      "way_points": [
                        5,
                        8
                      ]
                    },
                    {
                      "distance": 994.7,
                      "duration": 116,
                      "type": 1,
                      "instruction": "Turn right onto Rautatienkatu",
                      "name": "Rautatienkatu",
                      "way_points": [
                        8,
                        26
                      ]
                    },
                    {
                      "distance": 135.5,
                      "duration": 14.6,
                      "type": 1,
                      "instruction": "Turn right onto Kustaa Aadolfin katu",
                      "name": "Kustaa Aadolfin katu",
                      "way_points": [
                        26,
                        30
                      ]
                    },
                    {
                      "distance": 469.9,
                      "duration": 51.5,
                      "type": 0,
                      "instruction": "Turn left onto Tehtaankatu",
                      "name": "Tehtaankatu",
                      "way_points": [
                        30,
                        41
                      ]
                    },
                    {
                      "distance": 22.2,
                      "duration": 5.3,
                      "type": 0,
                      "instruction": "Turn left",
                      "name": "-",
                      "way_points": [
                        41,
                        43
                      ]
                    },
                    {
                      "distance": 0,
                      "duration": 0,
                      "type": 10,
                      "instruction": "Arrive at your destination, on the right",
                      "name": "-",
                      "way_points": [
                        43,
                        43
                      ]
                    }
                  ]
                }
              ],
              "way_points": [
                0,
                43
              ],
              "summary": {
                "distance": 1986.3,
                "duration": 252.8
              }
            },
            "geometry": {
              "coordinates": [
                [
                  23.15167,
                  63.834714
                ],
                [
                  23.151337,
                  63.834866
                ],
                [
                  23.150805,
                  63.835109
                ],
                [
                  23.150126,
                  63.83542
                ],
                [
                  23.149905,
                  63.835522
                ],
                [
                  23.148851,
                  63.836012
                ],
                [
                  23.147589,
                  63.835497
                ],
                [
                  23.146872,
                  63.835203
                ],
                [
                  23.146582,
                  63.834947
                ],
                [
                  23.145553,
                  63.835121
                ],
                [
                  23.144859,
                  63.835212
                ],
                [
                  23.143589,
                  63.835341
                ],
                [
                  23.142996,
                  63.83538
                ],
                [
                  23.141823,
                  63.835419
                ],
                [
                  23.140824,
                  63.835402
                ],
                [
                  23.138662,
                  63.835298
                ],
                [
                  23.137648,
                  63.835276
                ],
                [
                  23.136482,
                  63.83528
                ],
                [
                  23.136122,
                  63.83528
                ],
                [
                  23.135122,
                  63.835244
                ],
                [
                  23.134238,
                  63.835204
                ],
                [
                  23.133085,
                  63.835147
                ],
                [
                  23.13141,
                  63.835071
                ],
                [
                  23.129766,
                  63.834992
                ],
                [
                  23.128616,
                  63.834937
                ],
                [
                  23.126905,
                  63.834863
                ],
                [
                  23.126509,
                  63.834835
                ],
                [
                  23.126435,
                  63.835133
                ],
                [
                  23.126283,
                  63.835767
                ],
                [
                  23.126323,
                  63.83586
                ],
                [
                  23.126259,
                  63.836044
                ],
                [
                  23.126052,
                  63.836037
                ],
                [
                  23.123757,
                  63.835944
                ],
                [
                  23.121562,
                  63.835868
                ],
                [
                  23.121333,
                  63.835849
                ],
                [
                  23.120451,
                  63.835677
                ],
                [
                  23.120124,
                  63.835646
                ],
                [
                  23.119892,
                  63.835657
                ],
                [
                  23.119321,
                  63.835739
                ],
                [
                  23.119179,
                  63.83581
                ],
                [
                  23.119007,
                  63.835852
                ],
                [
                  23.117084,
                  63.836217
                ],
                [
                  23.117019,
                  63.836124
                ],
                [
                  23.116951,
                  63.836027
                ]
              ],
              "type": "LineString"
            }
          }
        ],
        "bbox": [
          23.116951,
          63.834714,
          23.15167,
          63.836217
        ]
      };
      
      const coordinates = geoJsonData.features[0].geometry.coordinates;
      const swappedCoordinates = coordinates.map(function (coord) {
        return [coord[1], coord[0]];
      });
      const route = L.polyline(swappedCoordinates, { color: 'red' }).addTo(map);
      map.fitBounds(route.getBounds());
    }
     return () => {
  // Cleanup function
  // const existingMap = L.DomUtil.get('map');
  // if (existingMap && existingMap._container && existingMap._container.parentNode) {
  //   existingMap._container.parentNode.removeChild(existingMap._container);
  // }
};
  }, []);
  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};
export default MyMapComponent;