import { styled } from 'styled-components'
import coverImg from '../../assets/Cover.png'

export const LayoutContainer = styled.div`
	min-height: 100vh;
`
export const CoverContainer = styled.div`
	height: 18.5rem;
  background-image: url(${coverImg});
  background-size: cover;
  background-repeat: round;
`

export const MaxWidth = styled.div`
	margin: 0 auto;
	max-width: 864px;
`
