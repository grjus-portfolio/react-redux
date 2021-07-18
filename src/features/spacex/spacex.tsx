import { gql, useLazyQuery } from '@apollo/client'
import React,{ FC, useEffect, useState } from 'react'
import ErrorBox from './errorBox'
import LaunchCard from './launchCard'
import LoadingBox from './loadingBox'

interface LaunchDetails {
	id:string,
	mission_name:string,
	mission_id:[],
	details:string,
	launch_success:boolean,
	rocket:RocketDetails,
	links:LaunchLinks

}

interface RocketDetails {
	rocket_name:string
}

interface LaunchLinks {
	article_link:string,
	reddit_recovery:string,
	video_link:string,
	wikipedia:string
}


const LAUNCH_QUERY = gql`
  query Launches($missionName:String!) {
    launches(find:{mission_name:$missionName}) {
    id
    mission_name
    mission_id
    launch_success
    details
    rocket {
      rocket_name
    }
    links {
      article_link
      reddit_recovery
      video_link
      wikipedia
    }
  }
  }
`

const SpaceX:FC = ()=> {

	const [ search, setSearch ] = useState<string>('')

	const [ fetchLaunches,{ loading, error, data } ] = useLazyQuery(LAUNCH_QUERY)

	useEffect(()=>{
		const timer = setTimeout(()=>{
			fetchLaunches({
				variables: {
					missionName: search
				}
			})
		},800)
		return ()=>{
			clearTimeout(timer)
		}
	},[ search ])

	return (
		<form>
			<div className="form-group">
				<input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control"  aria-describedby="searchField" placeholder="Search mission"/>
			</div>
			<div className="mt-4">
				{ loading? <LoadingBox/> : null }
				{ error? <ErrorBox/> : null }
				{ data ? data.launches.map((item:LaunchDetails)=>{
					return <LaunchCard 
						key={`${item.id}_${item.mission_name}`} 
						missionName={item.mission_name} 
						missionDescription={item.details}
						articleLink={item.links.article_link}
						videoLink={''}
						wikipedia={item.links.wikipedia}
					/>
				}):null}
				

			</div>
		</form>
	)
}

export default SpaceX
