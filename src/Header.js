import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.css';

const Header = ({
	title = 'My Title',
	navItems = ['nav-items-1', 'nav-items-2'],
}) => {
	let history = useHistory();
	function handleClick(items) {
		history.push(`/news/${items}`);
	}
	return (
		<>
			<div className='header'>
				<h1>{title}</h1>
				<nav>
					{navItems.map((items, index) => {
						return (
							<li key={index} onClick={() => handleClick(items)}>
								{items}
							</li>
						);
					})}
				</nav>
			</div>
		</>
	);
};

export default Header;
