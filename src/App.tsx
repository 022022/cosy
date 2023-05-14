import { Main } from './pages/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import { Additions } from './pages/Additions/Additions';
import { BurgerConstructor } from './features/burger/';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getBurger, selectBurger, selectBurgerStatus } from './features/burger/burgerSlice';
import { Order } from './features/order';

function App() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectBurgerStatus);
    const burgerData = useAppSelector(selectBurger);

	useEffect(() => {
		dispatch(getBurger());
		console.log('api call');
	}, [dispatch]);

	return (
		<>
			{status === 'failed' || burgerData.length === 0 ? (
				<div className='burger__load-error'>
					<div className='logo logo-big'></div>
					<p className='text-muted fs-1'>:(</p>
					<p className='w-50'>
						У нас на сайте временные неполадки, зайдите, пожалуйста,
						попозже
					</p>
				</div>
			) : (
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Main />} />
						<Route path='/burger/:id' element={<BurgerConstructor />} />
						<Route path='/additions' element={<Additions />} />
						<Route path='/order' element={<Order />} />
						<Route path='*' element={<Main />} />
					</Route>
				</Routes>
			)}
		</>
	);
}

export default App;
