import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
	return (
		<div>
			<Header />
			<Sidebar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
