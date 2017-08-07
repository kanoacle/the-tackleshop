function initMap() {
  var napeague = {lat: 41.001556, lng: -72.031719};
  var montaukPP = {lat: 41.0707208, lng: -71.8684961};
  var ditchPlains = {lat: 41.0394783, lng: -71.9191968};
  var edwardVE = {lat: 41.0441839, lng: -71.980585};
  var lousePoint = {lat: 41.0193461, lng: -72.1383464};
  var sammys = {lat: 41.0300129, lng: -72.1949341};
  var eastHampton = {lat: 40.9435075, lng: -72.1960687};
  var georgica = {lat: 40.9360719, lng: -72.2160076};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: napeague
  });

  var icons = {
    fish: {
      icon: '../img/striper-pin.png'
    }
  };

  var features = [
    {
      position: montaukPP,
      type: 'fish'
    }, {
      position: ditchPlains,
      type: 'fish'
    }, {
      position: edwardVE,
      type: 'fish'
    }, {
      position: lousePoint,
      type: 'fish'
    }, {
      position: sammys,
      type: 'fish'
    }, {
      position: eastHampton,
      type: 'fish'
    }, {
      position: georgica,
      type: 'fish'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}