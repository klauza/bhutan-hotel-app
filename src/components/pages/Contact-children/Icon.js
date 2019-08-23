import L from 'leaflet';
import marker from '../../../media/leaf-green.png'
import markerShadow from '../../../media/leaf-shadow.png';

const iconPerson = new L.Icon({
    iconUrl: marker,
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: markerShadow,
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
    iconSize: [38, 95]
});

export { iconPerson };