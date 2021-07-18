import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export interface UserData  {
	name:string,
	surname:string
}

export const initialState:UserData = {
	name:    '',
	surname: ''
}

// Set user name
export const userData = createSlice({
	name:     'userData',
	initialState,
	reducers: {
		setName: (state, action)=>{
			console.log('Updating redux name')
			state.name = action.payload
		},
		setSurname: (state, action)=>{
			console.log('Updtaing redux surname')
			state.surname = action.payload
		}
	}
    
})


export const selectUserName = (state:RootState):string=>state.userData.name
export const selectUserSurname = (state:RootState):string=>state.userData.surname


export const { setName, setSurname } = userData.actions

export default userData.reducer

