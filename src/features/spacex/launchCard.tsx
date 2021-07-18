import React from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
	missionName:string,
	missionDescription:string
	articleLink:string,
	videoLink:string,
	wikipedia:string
}

export default function LaunchCard({ missionName, missionDescription, articleLink, videoLink, wikipedia }:CardProps):JSX.Element {

	const baseUrl = 'https://www.youtube.com/embed/'
	const videoId = videoLink?videoLink.split('/').slice(-1).pop():''
	console.log(videoLink)


	return (
		<div className="card">
			<h5 className="card-header">{missionName}</h5>
			<div className="card-body">
				<h5 className="card-title">Mission details</h5>
				<p className="card-text">{ missionDescription }</p>
				<h5 className="card-title">More information</h5>
				<p className="card-text">For article click <a href={articleLink} target="_blank" rel="noreferrer">here</a></p>
				<p className="card-text">Wikipedia <a href={wikipedia} target="_blank" rel="noreferrer">article</a></p>
				<div className="card-text">
					<iframe src=''
						frameBorder='0'
						allow='autoplay; encrypted-media'
						allowFullScreen
						title='video'
					/>
				</div>
			</div>
		</div>
	)
}
