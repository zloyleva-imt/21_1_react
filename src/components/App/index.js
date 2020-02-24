import React, { useState, useEffect } from 'react';
import Header from "../Header";
import CurrencyList from "../CurrencyList";

import {fetchCountriesArray, fetchExchangeArray} from "../../services/fetchData";

const App = () => {

    const [countries, setCountries] = useState([]);
    const [exchange, setExchange] = useState([]);

    useEffect(async () => {
        const x = await fetchCountriesArray();
        const v = await fetchExchangeArray();

        // const res = x.filter(el => v.find(e => e.cc === el.currencies[0].code));
        const res = x.reduce((acc,el) => {acc.push(el);return acc;},[]);
        // setCountries(await fetchCountriesArray());
        // setExchange(await fetchExchangeArray());

        console.log(x);
        console.log(res)

    },[]);



    return (
        <div>
            <Header header={'Currency Inspector'} />
            <CurrencyList countries={countries} exchange={exchange}/>
        </div>
    );
};

export default App;
