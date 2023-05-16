import { useEffect, useState } from 'react'

export const useGeoLocation = () => {
    const[location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: 0, lng: 0}
    });

    const onSuccess = (location: { coords: { latitude: any; longitude: any; }; }) => {
        setLocation({
            loaded: true, 
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    

    useEffect(() => {
        if(!("geolocation" in navigator)){
            alert("Geolocation not supported");
        }

        navigator.geolocation.getCurrentPosition(onSuccess);
    }, []);

  return location;
}
