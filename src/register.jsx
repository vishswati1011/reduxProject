import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Identify from '../authsvg/Identify.png';
// import Manage from '../authsvg/Manage.png';
// import Assess from '../authsvg/Assess.png';
// import '../Css/Register.css';

const Register = () => {
	const [emailId, setEmailId] = useState('');
	const history = useNavigate();

	const formHandler = (event) => {
		event.preventDefault();
		const email = emailId.trim();
		if (email !== '') {
			history.push(`/sign-up-2/${emailId}`);
		}
	};
	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				padding: '8rem',
				alignItems: 'center',
				gap: '1.125rem',
				justifyContent: 'space-around',
			}}>
			<div>
				<div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
					<div>
						<img
							// src={Identify}
							alt='Identify'
							style={{ height: '15rem', width: '15rem' }}
						/>
						<div>
							<p style={{ color: '#4A56E6', fontSize: '2rem' }}>1</p>
							<p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Identify</p>
							<p
								style={{
									fontSize: '1.125rem',
									color: 'gray',
									fontWeight: '500',
								}}>
								Create a custom risk workflow, identify and capture risks.
							</p>
						</div>
					</div>
					<div>
						<img
							// src={Assess}
							alt='Assess'
							style={{ height: '15rem', width: '15rem' }}
						/>
						<div>
							<p style={{ color: '#4A56E6', fontSize: '2rem' }}>2</p>
							<p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Assess</p>
							<p
								style={{
									fontSize: '1.125rem',
									color: 'gray',
									fontWeight: '500',
								}}>
								Assign Owner, evaluate and asses risk using a custom risk rating
								scale.
							</p>
						</div>
					</div>
					<div>
						<img
							// src={Manage}
							alt='Manage'
							style={{ height: '15rem', width: '15rem' }}
						/>
						<div>
							<p style={{ color: '#4A56E6', fontSize: '2rem' }}>3</p>
							<p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Manage</p>
							<p
								style={{
									fontSize: '1.125rem',
									color: 'gray',
									fontWeight: '500',
								}}>
								Plan, implement risk treatment, and eliminate surprises.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p style={{ fontWeight: '600', fontSize: '2rem' }}>Create account</p>
				<form
					onSubmit={formHandler}
					style={{ display: 'flex', flexDirection: 'column' }}>
					<input
						required
						className='loginPage__input'
						placeholder='Enter Company e-mail'
						type='email'
						value={emailId}
						onChange={(e) => setEmailId(e.target.value)}
					/>
					<button type='submit' className='loginPage__loginButton btn-outline'>
						Sign up
					</button>
				</form>
				<div className='loginPage__footer'>
					<p className='loginPage__footerLeft'>Already registered?</p>
					<p
						style={{ cursor: 'pointer' }}
						onClick={() => history.push('/login')}
						className='ml-2 loginPage__footerRight'>
						Login
					</p>
				</div>
				<div className='loginPage__tnc'>
					<p>
						By signing up, you agree to our{' '}
						<a href='#' style={{ fontWeight: 'bold', color: 'black' }}>
							Terms and conditions
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
