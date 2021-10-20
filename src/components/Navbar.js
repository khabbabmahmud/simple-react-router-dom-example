import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	return (
		<>
			<nav className="main-nav">
			{/*1st logo part*/}
				<div className="logo">
					<NavLink to="/"><h2><span>S</span>oft <span>K</span>habbab</h2></NavLink>
				</div>

				{/*2nd menu part*/}
				<div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
					<ul>
						<li>
							<NavLink to="/">Home </NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/services">Services</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
				{/*3rd social media link*/}
				<div className="social-media">
					<ul className="social-media-desktop">
						<li>
							<a href="#"><FaFacebookSquare className="facebook"/></a>
						</li>
						<li>
							<a href="#"><FaInstagramSquare className="instagram"/></a>
						</li>
						<li>
							<a href="#"><FaYoutubeSquare className="youtube"/></a>
						</li>
					</ul>
					{/*hamburger menu start*/}
					<div className="hamburger-menu">
						<a href="#" onClick= {() => setShowMediaIcons(!showMediaIcons)}>
							<GiHamburgerMenu />
						</a>
					</div>
				</div>
			</nav>
			
		</>
	)
}

export default Navbar