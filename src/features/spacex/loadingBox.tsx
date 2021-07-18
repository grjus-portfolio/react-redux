import React from 'react'

function LoadingBox():JSX.Element {
	return (
		<div className="alert alert-light" role="alert">
			<span className="text-primary m-2">Fetching data</span>
			<div className="spinner-border text-primary" role="status"/>
		</div>
	)
}

export default LoadingBox
