import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { CoverContainer, LayoutContainer, MaxWidth } from './styles'

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<CoverContainer>
				<Header />
			</CoverContainer>
			<MaxWidth>
				<Outlet />
			</MaxWidth>
		</LayoutContainer>
	)
}
