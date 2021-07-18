import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setName, setSurname } from '../user-data/userDataSlice'

function Button():JSX.Element {

	const dispatch = useAppDispatch()

	const logoutUser = ()=>{
		dispatch(setName(''))
		dispatch(setSurname(''))
	}

	return (
		<div className="container">
			<button className="btn btn-secondary" onClick={logoutUser}>Logout</button>
		</div>
	)
}

export default Button
