import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import AppLayout from './ui/AppLayout';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route
							index
							element={<Navigate replace to="dashboard" />}
						/>
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

