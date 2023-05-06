import { Main } from './pages/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import { Additions } from './pages/Additions/Additions';
import { BurgerConstructor } from './features/burger/BurgerConstructor/BurgerConstructor';

import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { getBurger } from './features/burger/burgerSlice';


function App() {
    const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getBurger());
		console.log('api call');
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='/burger' element={<BurgerConstructor />} />
					<Route path='/additions' element={<Additions />} />
					<Route path='*' element={<Main />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
