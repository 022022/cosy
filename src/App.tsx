import { Main } from './pages/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import { Additions } from './pages/Additions/Additions';


function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='/additions' element={<Additions />} />
					<Route path='*' element={<Main />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
