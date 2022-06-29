function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 12.9716, lng: 77.5946},
      zoom: 18,
      mapId: "53d3f121e6533fb1",
      zoom: 12,
    });
    const marker = new google.maps.Marker({
        position: {lat: 12.991060590993142, lng: 77.70882799244376},
        map,
        title: "Yoshis House",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "Home.png",
            scaledSize: new google.maps.Size(38, 31)
        },
      });
      const infowindow = new google.maps.InfoWindow({
        content: "Yoshis House",
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

  }

//   12.9716° N, 77.5946° E
// 13.03463044980454, 77.68451753483828
// 12.9718188069865, 77.61148577284743
// 12.991060590993142, 77.70882799244376