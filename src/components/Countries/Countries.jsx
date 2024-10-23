import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        // console.log("flag adding");
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="mb-3">
                <h3 className="font-bold">Countries: {countries.length}</h3>
                {/* visited country */}
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul className="list-disc pl-5">
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flex gap-3 mb-5">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} className={`w-36`}></img>)
                }
            </div>
            {/* display countries */}
            <div className="grid lg:grid-cols-4 gap-5">
                {
                    countries.map(country => <Country key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry} 
                        handleVisitedFlags={handleVisitedFlags} 
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;