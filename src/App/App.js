// ---------------------------------------------------------------- //

// Importer la config de mapbox
import config from "../../app.config.json";

// Importer la librairie de mapbox
import mapboxgl from "mapbox-gl";

//Importer les librairies et scripts de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importer le style de mapbox
import "mapbox-gl/dist/mapbox-gl.css";

// Importer le fichier CSS
import "../assets/style.css";

// ---------------------------------------------------------------- //

class App {
  // Propriétés
  elDivMap; // container de la map
  map; // instance de la map

  start() {
    console.log("App démarrée toto...");
    // console.log( config.apis.mapbox_gl.api_key );

    this.loadDom();
    this.initMap();
  }

  initMap() {
    // Utilise l'API Mapbox GL pour accéder à une clé d'accès (API key) dans un fichier de configuration,
    // qui est ensuite utilisée pour autoriser et authentifier l'utilisation de Mapbox GL dans l'application.
    mapboxgl.accessToken = config.apis.mapbox_gl.api_key;

    this.map = new mapboxgl.Map({
      container: this.elDivMap, // l'ID du container
      style: config.apis.mapbox_gl.map_styles.satellite_streets, // le lien URL du style
      center: [2.79, 42.68], // Les coordonnées [long, lat] de la position de départ
      zoom: 12, // Initialisation du zoom
    });

    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-left");

    //on ecoute sur la map
    this.map.on("click", this.handleClickMap.bind(this));
  }

  loadDom() {
    // --- MAP ---
    this.elDivMap = document.createElement("div");
    this.elDivMap.id = "map";

    document.body.append(this.elDivMap);
  }

  //methode qui capte le clique sur la map
  handleClickMap(evt) {
    console.log(evt);

    //methode pour avoir la latitude et longitude

    console.log("Latitude", evt.lngLat.lat);
    console.log("Longitude", evt.lngLat.lng);
  }
}

const app = new App();

export default app;
