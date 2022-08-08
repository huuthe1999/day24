import './Control.css';

const Control = ({ handleChange, isLoading }) => {
	return (
		<div className='controls'>
			<input
				onChange={handleChange}
				type='text'
				disabled={isLoading}
				className='search__input'
				placeholder='Search countries by name, city and languages'
			/>
		</div>
	);
};

export default Control;
