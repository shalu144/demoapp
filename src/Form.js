import { useState } from 'react';

export default function Form() {

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	 const [phone,setPhone] =useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the address change
	const handleAddress = (e) => {
		setAddress(e.target.value);
		setSubmitted(false);
	};

    const handlePhone = (e) => {
		setPhone(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || address === ''||phone ==='' ) {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1>User {name} successfully registered!!</h1>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<div>
				<h1>User Registration</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				<label className="label">User Name</label>
				<input onChange={handleName} className="input"
					value={name} type="text" /><br/>

				<label className="label">Email</label>
				<input onChange={handleEmail} className="input"
					value={email} type="email" /><br/>

				<label className="label">Address</label>
				<input onChange={handleAddress} className="input"
					value={address} type="text" /><br/>

                <label className="label">PhoneNo</label>
				<input onChange={handlePhone} className="input"
					value={phone} type="Phone" /> <br/>

				<button onClick={handleSubmit} className="btn"
						type="submit"><br/>
					Submit
				</button>
			</form>
		</div>
	);
}
