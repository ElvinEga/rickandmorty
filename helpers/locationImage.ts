const locationImage = (type: string) => {
  switch (type) {
    case "Cluster":
      return "assets/img/locations/cluster.jpg";
    case "Dream":
      return "assets/img/locations/dream.jpg";
    case "Fantasy town":
      return "assets/img/locations/fantasy_town.jpg";
    case "Microverse":
      return "assets/img/locations/microverse.jpg";
    case "Planet":
      return "assets/img/locations/planet.jpg";
    case "Resort":
      return "assets/img/locations/resort.jpg";
    case "Space station":
      return "assets/img/locations/space_station.jpg";
    case "TV":
      return "assets/img/locations/tv.jpg";
    default:
      return "assets/img/locations/unknown.jpg";
  }
};

export default locationImage;
