import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context/places/PlacesContext";
import { Loading } from "./Loading";
import mapboxgl from "mapbox-gl";
import { MapContext } from "../context/map/MapContext";

export const MapView = () => {

    const {isLoading,userLocation} = useContext(PlacesContext);
    const {setMap} = useContext(MapContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading && userLocation) {
            if (mapDiv.current) {
                const map = new mapboxgl.Map({
                    container: mapDiv.current,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: userLocation,
                    zoom: 14,
                });
                setMap(map)
            }
        }
    }, [isLoading, userLocation]);

    if(isLoading){
        return(
            <Loading />
        )   
    }

    return (
        <div ref={mapDiv}
            style={{
                height:'100vh',
                left:0,
                position:'fixed',
                top:0,
                width:'100vw'
            }}    
        >
            {userLocation?.join(',')}
        </div>
    )
}