import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import favouriteLaunches from '../features/spacex/favLaunchesSlice'
import userDataReducer from '../features/user-data/userDataSlice'

export const store = configureStore({
	reducer: {
		counter:     counterReducer,
		userData:    userDataReducer,
		favLaunches: favouriteLaunches
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
