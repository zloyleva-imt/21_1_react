import {EXCHANGE_URL, REST_COUTRIES_URL} from "../constants";

export const fetchCountriesArray = async () => {
    const resCountries = await fetch(REST_COUTRIES_URL);
    return await resCountries.json();
};

export const fetchExchangeArray = async () => {
    const resExchange = await fetch(EXCHANGE_URL);
    return await resExchange.json();
};