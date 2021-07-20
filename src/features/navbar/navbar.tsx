import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectedFavourites } from '../spacex/favLaunchesSlice'
import { selectUserName, selectUserSurname } from '../user-data/userDataSlice'


export default function Navbar():JSX.Element  {

	const name = useAppSelector(selectUserName)
	const surname = useAppSelector(selectUserSurname)
	const myMissions = useAppSelector(selectedFavourites)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/" className="navbar-brand" href="#"><span className="mx-2"> Navbar</span></Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to="/counter" className="nav-link" href="#">Counter</Link>
					</li>
					<li className="nav-item">
						<Link to="/introduction" className="nav-link" href="#">User name</Link>
					</li>
					<li className="nav-item">
						<Link to="/spacex" className="nav-link" href="#">SpaceX</Link>
					</li>
					<li style={{ whiteSpace: 'nowrap' }} className="nav-item mx-2">
						<Link to="/my-missions" className="text-primary nav-link">My missions<i className="bi bi-heart-fill mx-1" />{ myMissions.length}</Link>
						<span className="">{name} {surname}</span>
					</li>
					<li className="nav-link float-end ">
					</li>
				</ul>
			</div>
		</nav>
	)
}