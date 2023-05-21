import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { Main } from './pages/Main/Main';
import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import { BurgerConstructor } from './features/burger/';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getBurger, selectBurger, selectBurgerStatus } from './features/burger/burgerSlice';
import { Order } from './features/order';
import { Error } from './pages/Error/Error';

function App() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectBurgerStatus);
    const burgerData = useAppSelector(selectBurger);

	useEffect(() => {
		dispatch(getBurger());
	}, [dispatch]);

    if (status === 'idle' || status === 'loading') {
		return <p className = 'text-center pt-3'>Идет загрузка...</p>;
	} else if (status === 'failed' || burgerData.length === 0) {
		return <Error />;
	} else {
		return (
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='/burger/:id' element={<BurgerConstructor />} />
					<Route path='/order' element={<Order />} />
					<Route path='*' element={<Main />} />
				</Route>
			</Routes>
		);
	}
}


export default App;
