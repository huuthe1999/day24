import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = ({ type, color = '#555', height, width, isCustom }) => {
	return (
		<ReactLoading
			type={type}
			color={color}
			height={height}
			width={width}
			className={`loading ${isCustom ? 'custom' : ''}`}
		/>
	);
};

export default Loading;
