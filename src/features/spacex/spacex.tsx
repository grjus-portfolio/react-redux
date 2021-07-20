import { gql, useLazyQuery } from '@apollo/client'
import React,{ ChangeEvent, FC, useEffect, useState } from 'react'
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
  query Launches($missionName:String!, $offset:Int!) {
    launches(find:{mission_name:$missionName}, limit:4, offset:$offset) {
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

	const [ fetchLaunches, { loading, error, data } ] = useLazyQuery(LAUNCH_QUERY)
	const [ pagePagination, setPagePagination ] = useState<number>(0)

	const  debounce = (func:()=>void, timeout = 300)=>{
		let timer:ReturnType<typeof setTimeout>
		return ()=>{
			clearTimeout(timer)
			timer = setTimeout(()=>func(), timeout)
		}
	}
    
	const handleNext = () => {
		setPagePagination(prev=>prev+2)
	}
	const handlePrev = () => {
		if (pagePagination < 0) ()=>setPagePagination(0)
		setPagePagination(prev=>prev>0?prev-2:0)
	}

	const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
		setPagePagination(0)
	}

	useEffect(()=>{
		const timer = setTimeout(()=>{
			fetchLaunches({
				variables: {
					missionName: search,
					offset:      pagePagination
				}
			})
		},800)
		return ()=>{
			clearTimeout(timer)
		}
	}, [ search, pagePagination ])
	

	console.log(pagePagination)
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<input type="text" value={search} onChange={handleSearch} className="form-control"  aria-describedby="searchField" placeholder="Search mission"/>
				</div>
			</form>
			<div className="d-flex">
				<button onClick={ debounce(()=>handleNext(),500) } className={`btn btn-primary m-2 ${data?.launches.length===0?'disabled':''}`}>Next</button>
				<button onClick={ debounce(()=>handlePrev(),500) } className={`btn btn-secondary ${pagePagination<=0?'disabled':''} m-2`}>Previous</button>
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
						wikipedia={item.links.wikipedia}
						id={item.id}
						showFav
					/>
				}):null}
			</div>
		</div>
	)
}

export default SpaceX
