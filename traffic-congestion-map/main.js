var mymap = L.map('map').setView([42.3314, -83.0458], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);

// Simulated traffic data with static congestion values
var simulatedTrafficData = [
    { congestion: 'high', coordinates: [
        [42.3314, -83.0458],
        [42.35, -83.05],
        [42.36, -83.06],
        [42.37, -83.07]
    ] },
    { congestion: 'medium', coordinates: [
        [42.3314, -83.0458],
        [42.34, -83.04],
        [42.35, -83.03],
        [42.36, -83.02]
    ] },
    { congestion: 'high', coordinates: [
        [42.3314, -83.0458],
        [42.31, -83.03],
        [42.29, -83.01]
    ] },
    { congestion: 'medium', coordinates: [
        [42.3314, -83.0458],
        [42.32, -83.04],
        [42.31, -83.03]
    ] }
];

// Loop through the simulated traffic data and display road segments with different colors
simulatedTrafficData.forEach(function(trafficSegment) {
    var lineColor = 'green'; // Default color for non-congested roads

    // Set the line color based on the congestion level
    if (trafficSegment.congestion === 'high') {
        lineColor = 'red'; // Highly congested
    } else if (trafficSegment.congestion === 'medium') {
        lineColor = 'yellow'; // Medium congestion
    }

    var polyline = L.polyline(trafficSegment.coordinates, { color: lineColor }).addTo(mymap);
    mymap.fitBounds(polyline.getBounds());

    polyline.bindPopup('Traffic Congestion: ' + trafficSegment.congestion).openPopup();
});

L.mapbox.accessToken = 'pk.eyJ1IjoibmFsYWJvdWRpIiwiYSI6ImNsbzFqdHd6ZzAwMGUycHBucDVxbTVvdHgifQ.PQDd6dbhWTUGtSETutRleg'; // Replace with your Mapbox API token
var mymap = L.mapbox.map('map', 'mapbox.streets').setView([42.3314, -83.0458], 12);

L.mapbox.directions({
    profile: 'mapbox.driving-traffic', // This profile includes traffic data
    origin: 'Detroit, MI',
    destination: 'A Random Destination', // Replace with actual destination
    container: 'directions'
}).addTo(mymap);
