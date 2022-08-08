import './Country.css';

const Country = ({
	country: {
		name: { common: countryName },
		languages,
		capital,
		population,
		currencies,
		flags: { png: flagUrl },
	},
}) => {
	return (
		<div className='country'>
			<div className='country__flag'>
				<img src={flagUrl} alt='Afghanistan' />
			</div>
			<h3 className='country__name'>{countryName}</h3>
			<div className='country__text'>
				<p>
					<span>Capital: </span>
					{capital}
				</p>
				<p>
					<span>Languages: </span>
					{languages && Object.values(languages).join(', ')}
				</p>
				<p>
					<span>Population: </span>
					{new Intl.NumberFormat().format(population)}
				</p>
				<p>
					<span>Currency: </span>
					{currencies &&
						Object.values(currencies)
							.map(
								item =>
									`${item.name} (${
										item.symbol && item.symbol
									})`,
							)
							.join(', ')}
				</p>
			</div>
		</div>
	);
};

export default Country;
