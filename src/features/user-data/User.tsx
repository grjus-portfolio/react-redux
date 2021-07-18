import React, { MouseEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { initialState, setName, setSurname, UserData } from './userDataSlice'


function User():JSX.Element {

	const [ userData, setUserData ] = useState<UserData>(initialState)


	const dispatch = useAppDispatch()

	const submitUserData = (e:MouseEvent<HTMLButtonElement>)=>{
		e.preventDefault()
		dispatch(setName(userData.name))
		dispatch(setSurname(userData.surname))
		setUserData(()=>{
			console.log('Flushing local user state')
			return {
				name:    '',
				surname: ''
			}
		})

	}
    

	return (
		<div className="container w-25">
			<form>
				<div className="form-group">
					<input type="text" value={userData.name} onChange={(e)=>setUserData(prev=>{
						return {
							...prev, name: e.target.value
						}
					})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
				</div>
				<div className="form-group mt-2">
					<input type="text" value={userData.surname} onChange={(e)=>setUserData(prev=>{
						return {
							...prev, surname: e.target.value
						}
					})} className="form-control" id="exampleInputPassword1" placeholder="Surname"/>
				</div>

				<button type="submit" className="btn btn-primary" onClick={submitUserData}>Submit</button>
			</form>
		</div>
	)
}

export default User
