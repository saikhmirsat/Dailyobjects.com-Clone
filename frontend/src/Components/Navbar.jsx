import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import "./Navbar.css"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"></img>
			<nav ref={navRef}>
				<a href="/#">NEW ARRIVALS</a>
				<a href="/#">CASES&SLEEVES</a>
				<a href="/#">ACCESORIES</a>
				<a href="/#">SALE</a>
                <a href="/#">BAGS&WALLET</a>
				<a href="/#">HOME OFFICE</a>
                <a href="/#">COLLECTION</a>
				<a href="/#">GIFTING</a>
				<div id="search">
				
				<FaShoppingBag />
				</div>
				<div id="user">
					<FiUser />
				</div>
				<div id="user">
				<FaSearch />
				</div>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
					
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;