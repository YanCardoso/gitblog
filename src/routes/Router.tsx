import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/defaultLayout'
import { Home } from '../pages/home'
import { Posts } from '../pages/posts'

export function Router() {
	return (
		<Routes>
			<Route
				path='/'
				element={<DefaultLayout />}
			>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/post/:id'
					element={<Posts />}
				/>
			</Route>
		</Routes>
	)
}
