import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3VjaGl0cmFzd2FpbiIsImEiOiJja3dydXZjeDgwMjV1MnZveXl5dWVnOXlpIn0.5CNGNzHuxFmfh0Z7DCyrPg";
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      // center: [78.9629, 20.5937],
      zoom: 3,
    });
  });
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
