import axios from 'axios';

import './App.css';
import CardsCountry from './components/CardsCountry';

function App() {
	return (
		<div className="App">
			<CardsCountry countryName="mexico" />
			<CardsCountry countryName="colombia" />
			<CardsCountry countryName="argentina" />
			<CardsCountry countryName="venezuela" />
			<CardsCountry countryName="ecuador" />
			<CardsCountry countryName="paraguay" />
			<CardsCountry countryName="brazil" />
			<CardsCountry countryName="panama" />
		</div>
	);
}

export default App;
