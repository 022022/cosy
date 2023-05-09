import { Main } from './pages/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import { Additions } from './pages/Additions/Additions';
import { BurgerConstructor } from './features/burger/';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getBurger, selectBurger } from './features/burger/burgerSlice';
import { Order } from './features/order/Order';


function App() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectBurger).status;

	useEffect(() => {
		dispatch(getBurger());
		console.log('api call');
	}, [dispatch]);

	return (
		<>
			{status === 'failed' ? (
				<div className='burger__load-error'>
					<p className='text-muted lead'>
						:(
					</p>
					<p className='w-50'>
						У нас на сайте временные неполадки, зайдите, пожалуйста,
						попозже
					</p>
				</div>
			) : (
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Main />} />
						<Route path='/burger' element={<BurgerConstructor />} />
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
