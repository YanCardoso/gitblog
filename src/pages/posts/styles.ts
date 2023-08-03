import { styled } from 'styled-components'

export const PostContainer = styled.div`
  position: relative;
  bottom: calc(10.5rem - 5rem);
`
export const PostContent = styled.div`
  position: relative;
	padding: 2.5rem 2rem;
	color: ${(props) => props.theme['base-text']};
`
