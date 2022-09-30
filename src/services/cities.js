import { ajax } from "../tools/ajax";

export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places",
        headers: {
            "X-RapidAPI-Key": "1910a52470msh958174fcc9d32e2p1d1e2djsna5cc8369e71f",
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
        },
        params: {
            limit: 10,
            type: "CITY",
            country: countryCode ?? "US",
        }
    };
    return await ajax(optionsRequest);
}
