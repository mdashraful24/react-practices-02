import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    // const passWithPrams = () => handleVisitedCountry(country);
    
    return (
        <div className={`border-2 border-solid border-gray-200 p-5 rounded-lg space-y-3 transition-colors ${visited ? 'bg-green-100 border-green-100' : 'bg-white'}`}>
            <h3 className="font-bold">{name?.common}</h3>
            <img className="w-full h-[230px] my-3" src={flags.png} alt="" />
            <div className="space-y-1">
                <p>Official: {name.official}</p>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p><small>Code: {cca3}</small></p>
            </div>
            <div className="flex flex-col gap-3">
                <button onClick={() => handleVisitedCountry(country)} className={`w-1/4 py-1 rounded-md bg-red-50 border-2 border-red-300`}>Mark Visited</button>
                <button onClick={() => handleVisitedFlags(country.flags.png)} className={`w-1/4 py-1 rounded-md bg-red-50 border-2 border-red-300`}>Visited Flag</button>
                <div>
                    <button onClick={handleVisited} className={`px-3 py-1 rounded-md transition-colors ${visited ? 'font-bold bg-green-300 border-green-100' : 'bg-red-50 border-2 border-red-300'}`}>{visited ? 'Visited' : 'Going'}</button>
                    {visited ? ' I have visited this country.' : ' I want to visit'}
                </div>
            </div>
            <hr />
            <CountryDetail 
                country={country} 
                handleVisitedCountry={handleVisitedCountry} 
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;