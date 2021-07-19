import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { FavLaunches } from './types'


const initialState:FavLaunches[] =[] 


export const favouriteLaunches = createSlice({
	name:     'favouriteSlices',
	initialState,
	reducers: {
		addFavourite: (state, action)=>{
			const newList = [ ...state, action.payload ]
			return newList
		},
		removeFavourite: (state, action)=>{
			const newList = state.filter(item=>item.id!==action.payload)
			return newList
		}

	}
})

export const selectedFavourites = (state:RootState):FavLaunches[]=>state.favLaunches

export const { addFavourite,removeFavourite } = favouriteLaunches.actions

export default favouriteLaunches.reducer