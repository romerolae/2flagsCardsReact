import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardsCountry = ({ countryName }) => {
	const [country, setCountry] = useState({});

	useEffect(() => {
		const URL = `https://restcountries.com/v2/name/${countryName}`;
		axios
			.get(URL)
			.then((res) => setCountry(res.data[0]))
			.catch((err) => console.log(err));
	}, []);

	console.log(country);

	return (
		<article>
			<div className="card">
				<h1 className="card__title">
					<span>{country.name}</span>
				</h1>
				<img className="card__flag" src={country.flag} alt="" />
				<div className="card__main">
					<p>
						<b>Capital: </b>
						{country.capital}
					</p>
					<p>
						<b>Language: </b>
						{country.languages?.[0].name}
					</p>
					<p>
						<b>Borders: </b>
						{`${country.borders?.[0]}, ${country.borders?.[1]}, ${country.borders?.[2]}, ${country.borders?.[3]}, ${country.borders?.[4]}`}
					</p>
					<p>
						<b>Currency: </b>
						{country.currencies?.[0].name}
					</p>
					<p>
						<b>Population: </b>
						{country.population}
					</p>
					<p>
						<b>Timezone: </b>
						{country.timezones?.[0]}
					</p>
				</div>
			</div>
		</article>
	);
};

export default CardsCountry;
