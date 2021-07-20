import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectedFavourites } from './favLaunchesSlice'
import LaunchCard from './launchCard'

function FavMissions(): JSX.Element {
    
	const myMissions = useAppSelector(selectedFavourites)

	console.log(myMissions)

	return (
		<div className="container">
			{myMissions.map(mission => {
				return <div key={mission.id} className="m-4">
					<LaunchCard
						missionName={mission.missionName}
						missionDescription={mission.missionDescription}
						articleLink={mission.articleLink}
						wikipedia={mission.wikipedia}/>
				</div>
			})}
                    
		</div>
	)
}

export default FavMissions
