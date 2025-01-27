
import React from 'react'
import './Register.css';



const Register = () => {

	return (
		<div className = 'addLandlord'>
			<h3>Landlord Registration</h3>
			<form className='addLandlordForm'>
				<div className='landlordInput'>
					<label htmlFor='name'> Username </label>
					<input
					type='text'
					id='name'
					autoComplete='off'
					placeholder='Enter username'
					>  
					</input>
				
				
					<label htmlFor='name'> Password </label>
					<input
						type='password'
						id='password'
						autoComplete='off'
						placeholder='Enter password'
					>  
					</input>
				</div>
			</form>
		</div>
	)
}

export default Register;