import React from 'react'
import { Link } from 'react-router-dom'

function FooterNav(props) {
	return (
		<footer className="footer-nav">
			<nav>
				<Link
					to="/fend-my-reads/"
					className="nav-link"
				>Home</Link>

				<Link
					to="/fend-my-reads/search"
					className="nav-link"
				>Search</Link>
			</nav>
		</footer>
	);
}

export default FooterNav