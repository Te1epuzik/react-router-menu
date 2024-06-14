import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import { TOption } from './models/menuOptionModel';

import { Main } from './components/Main';
import { Drift } from './components/Drift';
import { TimeAttack } from './components/TimeAttack';
import { NotFound } from './components/NotFound';

function App() {
	const menuOptions: TOption[] = [
		{
			name: 'Главная',
			link: '/',
			id: 0,
		},
		{
			name: 'Дрифт-такси',
			link: '/drift',
			id: 1,
		},
		{
			name: 'Time attack',
			link: '/timeattack',
			id: 2,
		},
		{
			name: 'Forza Karting',
			link: '/forza',
			id: 3,
		}
	];


	return (
		<>
			<nav className='menu'>
				<ul className='menu__list'>
					{menuOptions.map(option =>
						<li
							className='menu__item'
							key={option.id}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'menu__link'
										+ ' '
										+ 'menu__link--active'
										: 'menu__link'}
								to={option.link}>
								{option.name}
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/drift' element={<Drift />} />
				<Route path='/timeattack' element={<TimeAttack />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
