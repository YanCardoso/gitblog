import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { CoverContainer, LayoutContainer, MaxWidth } from './styles'

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<CoverContainer>
				<MaxWidth>
					<Header />
					<Outlet />
				</MaxWidth>
			</CoverContainer>
		</LayoutContainer>
	)
}
