import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Link = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1.6rem;
		font-weight: 500;
		padding: 1.2rem 2.4rem;
		transition: all 0.3s;
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-800);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}
`;

export default function MainNav() {
	return (
		<nav>
			<NavList>
				<li>
					<Link to="/dashboard">Home</Link>
				</li>
				<li>
					<Link to="/bookings">Bookings</Link>
				</li>
				<li>
					<Link to="/cabins">Cabins</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/settings">Settings</Link>
				</li>
			</NavList>
		</nav>
	);
}
