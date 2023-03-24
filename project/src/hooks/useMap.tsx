import {useEffect, useState, MutableRefObject, useRef} from 'react';
import leaflet from 'leaflet';
import {Map} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from 'mocks/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, cityToShow: Offer[]): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map !== null) {
      map.setView([cityToShow[0].city.location.latitude, cityToShow[0].city.location.longitude], 13);
    }
  }, [cityToShow]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cityToShow[0].city.location.latitude,
          lng: cityToShow[0].city.location.longitude,
        },
        zoom: cityToShow[0].city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [cityToShow, mapRef]);

  return map;
}

export default useMap;
