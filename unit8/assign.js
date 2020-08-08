// function main() {

//     let apiKey = "AIzaSyD-VfH7oTFPRw3Ib3dmmsVTWhS5b_s6MXE";
// }

// function main() {
//         var geocoder;
//         var map;
//         var address = document.getElementById("addr").value + " " + document.getElementById("city").value +
//             document.getElementById("state").value + document.getElementById("zip").value;
//         function initialize() {
//             geocoder = new google.maps.Geocoder();
//             var latlng = new google.maps.LatLng(-34.397, 150.644);
//             var myOptions = {
//                 zoom: 8,
//                 center: latlng,
//                 mapTypeControl: true,
//                 mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
//                 navigationControl: true,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             };
//             map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//             if (geocoder) {
//                 geocoder.geocode({ 'address': address }, function (results, status) {
//                     if (status == google.maps.GeocoderStatus.OK) {
//                         if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
//                             map.setCenter(results[0].geometry.location);

//                             var infowindow = new google.maps.InfoWindow(
//                                 {
//                                     content: '<b>' + address + '</b>',
//                                     size: new google.maps.Size(150, 50)
//                                 });

//                             var marker = new google.maps.Marker({
//                                 position: results[0].geometry.location,
//                                 map: map,
//                                 title: address
//                             });
//                             google.maps.event.addListener(marker, 'click', function () {
//                                 infowindow.open(map, marker);
//                             });

//                         } else {
//                             alert("No results found");
//                         }
//                     } else {
//                         alert("Geocode was not successful for the following reason: " + status);
//                     }
//                 });
//             }
//         }
//         initialize();
//     }

"use strict";

function initMap() {
    const map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 8,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });
    const geocoder = new google.maps.Geocoder();
    document.getElementById("submit").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("addr").value + " " + document.getElementById("city").value + 
    document.getElementById("state").value + document.getElementById("zip").value;
    geocoder.geocode({
        address: address
    },
        (results, status) => {
            if (status === "OK") {
                resultsMap.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        }
    );
}
