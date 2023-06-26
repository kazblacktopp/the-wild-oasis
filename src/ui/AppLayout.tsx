import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 4rem 4.8rem 6.4rem;
	overflow: scroll;
`;

export default function AppLayout() {
	return (
		<div>
			<Header />
			<Sidebar />
			<Main>
				<Outlet />
			</Main>
		</div>
	);
}
