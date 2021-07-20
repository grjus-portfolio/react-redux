import React, {  useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addFavourite, removeFavourite } from './favLaunchesSlice'
import { FavLaunches } from './types'


export default function LaunchCard({ missionName, missionDescription, articleLink, wikipedia,id, showFav }:FavLaunches):JSX.Element {

	
	const [ checked, setChecked ] = useState<boolean>(false)
	const dispatch = useAppDispatch()


	const handleChecked = () => {
		
		setChecked(prev => {
			if (!prev) {
				dispatch(addFavourite({
					missionName,
					missionDescription,
					wikipedia,
					articleLink,
					id
				}))
			} else {
				dispatch(removeFavourite(id))
			}
			return !prev
		})
	}


	return (
		<div className="card">
			<h5 className="card-header">{missionName}</h5>
			<div className="card-body">
				<h5 className="card-title">Mission details</h5>
				<p className="card-text">{ missionDescription }</p>
				<h5 className="card-title">More information</h5>
				<p className="card-text">For article click <a href={articleLink} target="_blank" rel="noreferrer">here</a></p>
				<p className="card-text">Wikipedia <a href={wikipedia} target="_blank" rel="noreferrer">article</a></p>
				{showFav ? <div onClick={handleChecked} style={{ cursor: 'pointer', userSelect: 'none' }} className="d-flex">
					<i className={`bi bi-heart${checked ? '-fill' : ''}`} />
					<span className="px-2" >
						Add to favourites
					</span>
				</div> : null}
			</div>
		</div>
	)
}
