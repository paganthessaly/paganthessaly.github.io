//Geojson data//
var settlements = {
  "type" : "FeatureCollection",
  "name" : "settlements",
  "crs": {
      "type": "name",
      "properties": {
        "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
      }
  },
  "features" : [
      {
          "type": "Feature",
          "properties": {
            "name": "Λάκα του Μαντζιάρα",
            "description": "Μαύρο νερό κάτω από το χώμα.",
            "counter": false,
            "category": "park"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              21.911534070968628,
              39.36407381206143
            ]
          }
        },
      { 
          "type" : "Feature", 
          "properties" : {  
              "name" : "Χίλια Δέντρα",
              "description" : "Εδώ βγαίνει κακός ηλεκτρισμός, σπάνε κόκαλα για να τον παράγουν.",
              "counter": false,
              "category": "forest"
          }, 
          "geometry" : { 
              "type": "Polygon",
      "coordinates": [
        [
          [
            21.887426376342773,
            39.34335862490393
          ],
          [
            21.888091564178467,
            39.3425786781202
          ],
          [
            21.88854217529297,
            39.342595272823225
          ],
          [
            21.889615058898926,
            39.34106854365119
          ],
          [
            21.890151500701904,
            39.34105194858568
          ],
          [
            21.89150333404541,
            39.34214721445827
          ],
          [
            21.891117095947262,
            39.34354116438369
          ],
          [
            21.89077377319336,
            39.343839864322256
          ],
          [
            21.890687942504883,
            39.344204940291405
          ],
          [
            21.889207363128662,
            39.34412196864768
          ],
          [
            21.887426376342773,
            39.34335862490393
          ]
        ]
      ] 
          }
      },
    { 
          "type" : "Feature", 
          "properties" : {  
              "name" : "Αετοχώρι",
              "description" : "Μαρκελέσι",
              "counter": false,
              "category": "village"
          }, 
          "geometry" : { 
              "type" : "Point", 
              "coordinates" : [
                  21.465820, 39.285774 
              ] 
          }
      },
      { 
          "type" : "Feature", 
          "properties" : {  
              "name" : "Κάστρο Φαναρίου",
              "description" : "Στοιχειωμένο βυζαντινό κάστρο. Οι ταπετσαρίες του κροταλίζουν.",
              "counter": false,
              "category": "castle"
          }, 
          "geometry" : { 
              "type" : "Point", 
              "coordinates" : [
                  21.801922917366024,
                  39.415658771463484
              ] 
          }
      },
      { 
          "type" : "Feature", 
          "properties" : {  
              "name" : "Αγχίαλος",
              "description" : "Καλύβα χαζο-Λευτέρη. Τα τρανζίστορ παίζουν παράσιτα σε ακτίνα 200 μέτρων.",
              "counter": false,
              "category": "village"
          }, 
          "geometry" : { 
              "type" : "Point", 
              "coordinates" : [
                  22.821178436279297,
                  39.27796225036292
              ] 
          }
      },
      { 
          "type" : "Feature", 
          "properties" : {  
              "name" : "Καλύβια",
              "description" : "Η γιαγιά προμηθεύει με ζυμωτό ψωμί.",
              "counter": false,
              "category": "village"
          }, 
          "geometry" : { 
              "type" : "Point", 
              "coordinates" : [
                  21.711612939834595,
                  39.30660040078524
              ] 
          }
      }
  ]
};  
var regions = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name":"Δρακοβούνια",
          "descritpion":"Ραχοκοκαλιά Δράκου"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                23.18939208984375,
                39.155622393423215
              ],
              [
                23.170166015625,
                39.12792964388499
              ],
              [
                23.10699462890625,
                39.102357437817595
              ],
              [
                23.12347412109375,
                39.08956785484934
              ],
              [
                23.258056640625,
                39.12792964388499
              ],
              [
                23.33770751953125,
                39.172658670429946
              ],
              [
                23.329467773437496,
                39.23863526469436
              ],
              [
                23.28826904296875,
                39.29179704377487
              ],
              [
                23.24432373046875,
                39.35129035526705
              ],
              [
                23.1427001953125,
                39.44043541908485
              ],
              [
                23.0712890625,
                39.527348072681455
              ],
              [
                22.98614501953125,
                39.5633531658293
              ],
              [
                22.92572021484375,
                39.614152077002664
              ],
              [
                22.859802246093746,
                39.80853604144591
              ],
              [
                22.73345947265625,
                39.882342585755744
              ],
              [
                22.65380859375,
                39.970805680527725
              ],
              [
                22.4560546875,
                40.166281254206545
              ],
              [
                22.302246093749996,
                40.204050425113294
              ],
              [
                22.1978759765625,
                40.136890695345905
              ],
              [
                22.2528076171875,
                40.02340800226773
              ],
              [
                22.203369140625,
                39.930800820752765
              ],
              [
                22.2528076171875,
                39.85072092501597
              ],
              [
                22.357177734375,
                39.80009595634838
              ],
              [
                22.532958984375,
                39.78321267821705
              ],
              [
                22.6263427734375,
                39.69450749856091
              ],
              [
                22.69775390625,
                39.61838363831915
              ],
              [
                22.846069335937496,
                39.499802162332884
              ],
              [
                22.905120849609375,
                39.48496522541802
              ],
              [
                22.96142578125,
                39.436192999314095
              ],
              [
                23.006744384765625,
                39.40648882684979
              ],
              [
                23.00399780273437,
                39.377833529911555
              ],
              [
                23.054809570312496,
                39.335359608681216
              ],
              [
                23.1097412109375,
                39.308800296002914
              ],
              [
                23.17291259765625,
                39.2630946911543
              ],
              [
                23.193511962890625,
                39.23331686919235
              ],
              [
                23.226470947265625,
                39.18649760718107
              ],
              [
                23.2196044921875,
                39.1524276321479
              ],
              [
                23.18939208984375,
                39.155622393423215
              ]
            ]
          ]
        }
      }
    ]
  }
//End of geojson data//

//Declaration of BaseLayers and the Map//
var mymap = L.map('map', {minZoom: 10}).setView([39.37, 22.271], 10);
var normalia=L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFrc2VyayIsImEiOiJjazlpaWpldzIwMjFsM2ZuMnQ0bnk3NTl6In0.6hYqQijbENyIxmJnKHQC_A', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/outdoors-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

var gl = L.mapboxGL({
  accessToken: "pk.eyJ1IjoibGFrc2VyayIsImEiOiJjazlpaWpldzIwMjFsM2ZuMnQ0bnk3NTl6In0.6hYqQijbENyIxmJnKHQC_A",
  style: 'mapbox://styles/lakserk/ck9qpcbaz168f1ip8c1hdt9pj'
});

//End of Declaration of BaseLayers and the Map//

//Map boundaries
var southWest = L.latLng(39.035736, 21.423108),
northEast = L.latLng(39.826566, 23.502042);
var bounds = L.latLngBounds(southWest, northEast);

mymap.setMaxBounds(bounds);
mymap.on('drag', function() {
mymap.panInsideBounds(bounds, { animate: false });
});
//End of Map boundaries


var markersLayer = new L.LayerGroup();	//layer contain searched elements
mymap.addLayer(markersLayer);



//Sidebar
var sidebar = L.control.sidebar({
  autopan: false,       // whether to maintain the centered map point when opening the sidebar
  closeButton: true,    // whether t add a close button to the panes
  container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
  position: 'left',     // left or right
}).addTo(mymap);
//End of Sidebar


//GeoJson collection//
var categories = {},
    category;

function onEachFeature(feature, layer) {
  // Initialize the category array if not already set.
  if (typeof categories[feature.properties.category] === "undefined") {
    categories[feature.properties.category] = [];
  }
  categories[feature.properties.category].push(layer);
  layer.on('click', function(e) {
      rotas.resetStyle();
      layer.setStyle({fillColor: '#3f0', color: '#0f0'});
      $(".settlementname").html(feature.properties.name);
      $(".settlementdescription").html(feature.properties.description);
      if($("#sidebar").hasClass("collapsed")){sidebar.open('home');}
  });
}

function onEachFeature1(feature, layer) {
  layer.setStyle({fillColor: '#3f0', color: '#0f0'});
}

var rotas = L.geoJSON(settlements, {
  pointToLayer: function(feature, latlng) {
      return new L.CircleMarker(latlng, {radius: 10, fillOpacity: .6, weight: 2});
     },
     style: function(feature) {
      var cat = feature.properties.category;
      if (cat == "forest") {
        return {
          color: "green"
        }; 
      }
      else if (cat == "park") {
        return {
          color: "orange"
        };
      } else if (cat == "village") {
        return {
          color: "brown"
        };
      }  else if (cat == "castle") {
        return {
          color: "black"
        };
      }
      else {
        return {
          color: "white"
        }
      }
    },
    onEachFeature: onEachFeature
});

var theregions=L.geoJSON(regions,{
  pointToLayer: function(feature, latlng) {
    return new L.CircleMarker(latlng, {radius: 10, fillOpacity: .6, weight: 2});
   },
   onEachFeature: onEachFeature1
}).addTo(mymap);

//End of GeoJson collection//

//Layer Control Section//
var baseMaps={
  "Normal": normalia,
  "Otherine":gl
};

var overlaysObj = {},
    categoryName,
    categoryArray,
    categoryLG;

for (categoryName in categories) {
    categoryArray = categories[categoryName];
    categoryLG = L.layerGroup(categoryArray).addTo(mymap);
    categoryLG.categoryName = categoryName;
    overlaysObj[categoryName] = categoryLG;
}

// Create an empty LayerGroup that will be used to emulate adding / removing all categories.
var allPointsLG = L.layerGroup();
overlaysObj["All Points"] = allPointsLG;


var control = L.control.layers(baseMaps, overlaysObj, { collapsed: false, position:'bottomright' }).addTo(mymap);
//End of Layer Control Section//


var searchControl = new L.Control.Search({
  container:"searchholder",
  propertyName: 'name',		
  layer: rotas,
  zoom: 13,
  minLength:2,
  collapsed:false,
  marker: false
});

searchControl.on('search:locationfound', function(e) {
  
  rotas.resetStyle();
  e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
  if(e.layer._popup)
      e.layer.openPopup();
  
  });

mymap.addControl( searchControl );


//Measure Distance Section//
L.control.polylineMeasure({
  position:'bottomright', 
  unit:'metres', 
  showBearings:false, 
  clearMeasurementsOnStop: false, 
  showClearControl: true, 
  showUnitControl: true
}).addTo(mymap);
