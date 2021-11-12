import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureFilter from "@arcgis/core/views/layers/support/FeatureFilter";
import "datejs";


import esriConfig from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import * as closestFacility from "@arcgis/core/rest/closestFacility";
import ClosestFacilityParameters from "@arcgis/core/rest/support/ClosestFacilityParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import Symbol from "@arcgis/core/symbols/Symbol";


import Point from "@arcgis/core/geometry/Point";


const start_date_DIV = document.querySelector('#start_date_DIV')
const end_date_DIV = document.querySelector('#end_date_DIV')
const specialist_type_value_DIV = document.querySelector('#specialist_type_value_DIV')
const search_button = document.querySelector('#search_button')


const mapDiv = document.getElementById("mapDiv")

const popupTemplate = {
  // autocasts as new PopupTemplate()
  title: "Specialist: {SpecialistType}",
  content: [
    {
      // It is also possible to set the fieldInfos outside of the content
      // directly in the popupTemplate. If no fieldInfos is specifically set
      // in the content, it defaults to whatever may be set within the popupTemplate.
      type: "fields",
      fieldInfos: [
        {
          fieldName: "Name",
          label: "Name"
        },
        {
          fieldName: "SpecialistType",
          label: "Specialist"
        },
        {
          fieldName: "AvailableDate",
          label: "Opening"
        },
        {
          fieldName: "SpecialistEndDate",
          label: "Closing"
        },
      ]
    }
  ]
};


const specialists_layer = new FeatureLayer({
  title: "Specialists",
  url: 'https://services8.arcgis.com/SOqSu0Nc0YVnxZDD/arcgis/rest/services/service_e57b964e2c1c4340aaa10586746347c7/FeatureServer/0',
  fields: [
    { "name": "SpecialistType", "type": "string" },
    { "name": "SpecialistCode", "type": "string" },
    { "name": "Name", "type": "string" },
    { "name": "AvailableDate", "type": "date" }, // date field
    { "name": "SpecialistEndDate", "type": "date" } // date field
  ],
  popupTemplate: popupTemplate,
  displayField: 'name',
  outFields: [
    "SpecialistType",
    "SpecialistCode",
    "Name",
    "AvailableDate",
    "SpecialistEndDate",
  ],
  objectIdField: "ObjectID",
  geometryType: "point",
  spatialReference: { wkid: 4326 },
});


const routesLayer = new GraphicsLayer();
const facilitiesLayer = new GraphicsLayer();


const myMap = new Map({
  basemap: "gray",
  layers: [
    specialists_layer,
    routesLayer,
    facilitiesLayer
  ]
});



// Create a MapView instance (for 2D viewing) and reference the map instance
const mapView = new MapView({
  map: myMap,
  center: [36.8, -1.3], // Longitude, latitude
  zoom: 12, // Zoom level
  container: mapDiv
});



search_button.addEventListener('click', () => {
  let specialist_type_value = String(specialist_type_value_DIV.value)
  let start_date_value = new Date(start_date_DIV.value).toString("yyyy-MM-dd HH:mm:ss")
  let end_date_value = new Date(end_date_DIV.value).toString("yyyy-MM-dd HH:mm:ss")



  if (specialist_type_value && start_date_value && end_date_value) {

    mapView.whenLayerView(specialists_layer).then(function (layerView) {

      let specialistsLayerView = layerView
      specialistsLayerView.filter = new FeatureFilter({
        where: `SpecialistType = '${specialist_type_value}' AND AvailableDate = TIMESTAMP '${start_date_value}' AND SpecialistEndDate = TIMESTAMP '${end_date_value}'`,
      });

      // console.log({specialistsLayerView})

      // Get a query object from the filter's current configuration
      const queryParams = specialistsLayerView.filter.createQuery()
      queryParams.returnGeometry = true;

      // query the layer with the modified params object
      specialistsLayerView.queryFeatures(queryParams)
        .then(function (results) {

          let filtered_specialist = results.features


          let graphics = [], graphic
          for (let i = 0; i < filtered_specialist.length; i++) {
            graphic = new Graphic({
              geometry: {
                type: "point",
                latitude: filtered_specialist[i].LATITUDE,
                longitude: filtered_specialist[i].LONGITUDE
              },
              attributes: filtered_specialist[i]
            });

            graphics.push(graphic);
          }

          console.log({ graphics })

          let facilities = []

          for (let facility of graphics) {
            let facility_long = facility.attributes.geometry.longitude
            let facility_lat = facility.attributes.geometry.latitude
            let facility_coord = [facility_long, facility_lat]
            facilities.push(facility_coord);
          }

          console.log({ facilities })

          esriConfig.apiKey = "AAPKc8abfa07f2a340e380dd6addb33dff398nty0Y1Kz17qNPgqKE0pI8WeMjuMZWIe-sWTzlk9dC08k9gQAI982Si8JTYW2-4v";

          const routeSymbol = {
            type: "simple-line",
            color: [50, 150, 255, 0.75],
            width: "5",
          };


          let filtered_featurelayer_coords = facilities

          if (filtered_featurelayer_coords.length >= 1) {
            mapView.popup.actions = [];

            // mapView.when(() => {
            //   addFacilityGraphics();
            //   findClosestFacility(addStartGraphic(mapView.center), facilitiesLayer.graphics);
            // });


            mapView.on("click", (event) => {

              let map_long = event.mapPoint.longitude
              let map_lat = event.mapPoint.latitude

              let mvc = mapView.center

              //Create a point
              const point = new Point({
                longitude: map_long,
                latitude: map_lat,
                spatialReference: mvc.spatialReference
              });

              
              // console.log({ mvc })
              // console.log({ point })

              addFacilityGraphics();
              findClosestFacility(addStartGraphic(point), facilitiesLayer.graphics);


              mapView.hitTest(event).then((response) => {
                if (response.results.length === 1) {
                  findClosestFacility(addStartGraphic(event.mapPoint), facilitiesLayer.graphics);
                }
              });
            });

            function findClosestFacility(startFeature, facilityFeatures) {
              const params = new ClosestFacilityParameters({
                incidents: new FeatureSet({
                  features: [startFeature],
                }),
                facilities: new FeatureSet({
                  features: facilityFeatures.toArray(),
                }),
                returnRoutes: true,
                returnFacilities: true,
                defaultTargetFacilityCount: 3,
              });

              const url = "https://route-api.arcgis.com/arcgis/rest/services/World/ClosestFacility/NAServer/ClosestFacility_World";

              closestFacility.solve(url, params).then(
                (results) => {
                  showRoutes(results.routes);
                },
                (error) => {
                  console.log(error.details);
                }
              );
            }




            // Add start graphic
            function addStartGraphic(point) {
              mapView.graphics.removeAll()
              const graphic = new Graphic({
                symbol: {
                  type: "simple-marker",
                  color: [255, 255, 255, 1.0],
                  size: 8,
                  outline: {
                    color: [50, 50, 50],
                    width: 1,
                  },
                },
                geometry: point,
              });
              mapView.graphics.add(graphic);
              return graphic;
            }


            function addFacilityGraphics() {
              filtered_featurelayer_coords.forEach((point) => {
                facilitiesLayer.graphics.add(
                  new Graphic({
                    geometry: {
                      type: "point",
                      longitude: point[0],
                      latitude: point[1],
                      spatialReference: mapView.spatialReference,
                    },
                  })
                );
              });
            }

            function showRoutes(routes) {
              // Show the routes to the closest facilities
              routesLayer.removeAll();
              routes.forEach((route, i) => {
                route.symbol = routeSymbol;
                routesLayer.add(route);
              });
            }
          } else{
            alert('No Specialist found for the given querry')
          }
        });



    })
  }

})






