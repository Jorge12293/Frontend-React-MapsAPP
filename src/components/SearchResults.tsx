import { useContext, useState } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import { LoadingPlaces } from "./LoadingPlaces";
import { MapContext } from "../context/map/MapContext";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {

    const { places, isLoadingPlaces,userLocation } = useContext(PlacesContext)
    const { map, getRouterBetweenPoints } = useContext(MapContext)

    const [activeId, setActiveId] = useState('');

    const onPlaceClicked = (place: Feature) => {
        setActiveId(place.id)
        const [lng, lat] = place.center;
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const getRoute=(place:Feature)=>{
        if(!userLocation) return;
        const [lng,lat] = place.center;
        getRouterBetweenPoints(userLocation, [lng,lat])
    }

    if (isLoadingPlaces) {
        return <LoadingPlaces />;
    }

    if (places.length === 0) {
        return <></>
    }

    return (

        <ul className="list-group mt-3">

            {
                places.map(place => (
                    <li
                        key={place.id}
                        className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active':''}`}
                        onClick={() => onPlaceClicked(place)}>
                        <h6>{place.text_es}</h6>
                        <p
                            style={{
                                fontSize: '12px'
                            }}>
                            {place.place_name}
                        </p>

                        <button
                            onClick={()=>getRoute(place)}
                            className={`btn btn-sm ${ activeId === place.id ? 'btn-outline-light':'btn-outline-primary' } `}>
                            Direcciones
                        </button>

                    </li>
                ))
            }

        </ul>
    );
}

