import { NavLink, Outlet } from 'react-router'
import logo from '../../assets/1000_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg'
const Layout = () => {
	return (
		<div className='flex h-screen '>
			<aside className='lg:w-[20%] pt-4 bg-black border-r-4 border-white text-white'>
				<ul className='leading-[50px]'>
					<img src={logo} className='w-40 m-2' />
					<li>
						<NavLink to='/' className={({ isActive }) => `block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/search' className={({ isActive }) => `block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Search
						</NavLink>
					</li>
					<li>
						<NavLink to='/explore' className={({ isActive }) => `block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Explore
						</NavLink>
					</li>
					<li>
						<NavLink to='/reels' className={({ isActive }) => `block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Reels
						</NavLink>
					</li>
					<li>
						<NavLink to='/messages' className={({ isActive }) => `block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Messages
						</NavLink>
					</li>
					<li>
						<NavLink to='/notifications' className={({ isActive }) => `block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Notifications
						</NavLink>
					</li>
					<li>
						<NavLink to='/create' className={({ isActive }) =>
								`block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Create
						</NavLink>
					</li>
					<li>
						<NavLink to='/profile' className={({ isActive }) =>
								`block text-[18px] py-1 px-4 ${isActive ? 'bg-gray-900' : ''}`}>
							Profile
						</NavLink>
					</li>
				</ul>
			</aside>

			<main className='m-auto'>
				<Outlet />
			</main>
		</div>
	)
}
export default Layout
