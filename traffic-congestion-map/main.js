document.addEventListener("DOMContentLoaded", function(){
    GenerateMap();
});

function GenerateMap(){
    var directions = new google.maps.DirectionsService();
    var render = new google.maps.DirectionsRenderer();
    var getTraffic = new google.maps.TrafficLayer();

    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 7,
        center: {lat: 42.7325, lng: -84.5555}
    });
    render.setMap(map);
    render.setMap(map);

    getRoute(directions,render);

}  

function getRoute(getDirections, renderDirections){
    directions.route({
        origin: '220 Trowbridge Rd, East Lansing, MI 48824',
        to: '4901 Evergreen Rd, Dearborn, MI 48128',
        travelMode: 'DRIVING'
    }),
    function(response){
      renderDirections.getDirections(response);
    }
    
}
GenerateMap();