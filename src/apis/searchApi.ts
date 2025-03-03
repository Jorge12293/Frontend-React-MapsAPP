import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:process.env.REACT_APP_KEY_MAP_BOX
    }
})

export default searchApi;
