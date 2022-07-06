import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import RequestButton from '../components/Button';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<div className='logo'>
					<img src={logo} alt='logo' />
				</div>

				{/* mobile menu icon */}
				<div className='menu-icon' onClick={handleClick}>
					{click ? (
						<img src={close} alt='close icon' />
					) : (
						<img src={hamburger} alt='hamburger icon' />
					)}
				</div>

				<ul className={click ? 'navbar-nav nav-menu active' : 'navbar-nav nav-menu'}>
					<li className='nav-item menu-item'>
						<a href='/' className='nav-link'>
							Home
						</a>
					</li>
					<li className='nav-item menu-item'>
						<a href='/' className='nav-link'>
							About
						</a>
					</li>
					<li className='nav-item menu-item'>
						<a href='/' className='nav-link'>
							Contact
						</a>
					</li>
					<li className='nav-item menu-item'>
						<a href='/' className='nav-link'>
							Blog
						</a>
					</li>
					<li className='nav-item menu-item'>
						<a href='/' className='nav-link'>
							Careers
						</a>
					</li>
				</ul>
				{button && (
					<RequestButton />
				)}
			</div>
		</nav>
	);
};

export default Navbar;
