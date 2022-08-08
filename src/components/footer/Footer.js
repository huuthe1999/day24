import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-wrapper'>
				<p>Copyright ©2020 30 Days Of React</p>
				<p>
					Join{' '}
					<a
						href='https://github.com/Asabeneh/30-Days-Of-React'
						target='_blank'
						rel='noopener noreferrer'>
						30 Days of React challenge
					</a>
				</p>
				<small>
					Designed and Built by{' '}
					<a
						href='https://www.linkedin.com/in/asabeneh/'
						target='_blank'
						rel='noopener noreferrer'>
						Asabeneh Yetayeh
					</a>
				</small>
				<div className='footer__arrow'>
					<a href='#root'>
						<i className='fas fa-arrow-alt-circle-up'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
