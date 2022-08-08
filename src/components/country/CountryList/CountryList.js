import Loading from '../../loading.js';
import Country from '../Country/Country';
import './CountryList.css';

const CountryList = ({ data, isSearching, isLoading }) => {
	return (
		<div className='countries'>
			{isLoading || isSearching ? (
				<Loading type='spin' color='#60dcfc' />
			) : (
				data.length > 0 &&
				data.map((country, index) => (
					<Country key={index} country={country} />
				))
			)}
		</div>
	);
};

export default CountryList;
