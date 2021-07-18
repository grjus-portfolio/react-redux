import React from 'react'

function ErrorBox():JSX.Element {
	return (
		<div className="alert alert-danger" role="alert">
        Error fetching data :-(
		</div>
	)
}

export default ErrorBox
