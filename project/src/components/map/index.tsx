import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '@hooks/useMap';
import { InitialState } from '@customTypes/store';
import { URL_MARKER_DEFAULT,URL_MARKER_CURRENT } from '@utils/const';

function choseIcon(Url: string) {
  return leaflet.icon({
    iconUrl: Url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
}

function Map (): JSX.Element {
  const offersToShow = useSelector((state: InitialState) => state.offers);

  const cityToShow = useSelector((state: InitialState) => state.offers.find((offer) => offer.city.name === state.city));
  const offerToMark = useSelector((state: InitialState) => state.hoveredOffer);
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityToShow);

  useEffect(() => {
    if (map) {
      offersToShow.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer === offerToMark)
              ? choseIcon(URL_MARKER_CURRENT)
              : choseIcon(URL_MARKER_DEFAULT)
          })
          .addTo(map);
      });
    } }, [map, offersToShow, offerToMark]);

  return (
    <section style={
      {
        height: '100%',
        width: `${window.location.pathname.includes('/offer/') ? '1144px' : '100%'}`,
        margin: `${window.location.pathname.includes('/offer/') ? 'auto' : ''}`}
    }
    ref={mapRef}
    />);
}

export default Map;


