import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
	display: flex;
	position: relative;
	height: 13.25rem;
	background: ${(props) => props.theme['base-profile']};
	padding: 2rem;
	gap: 2rem;
	border-radius: 10px;

	img {
		border-radius: 8px;
	}
`

export const LinkGit = styled.a`
	display: inline-flex;
	gap: 0.5rem;
	position: absolute;
	right: 2rem;
	text-decoration: none;

	align-items: center;

	span {
		color: ${(props) => props.theme['base-blue']};
		font-size: 0.75rem;
		font-weight: 700;
		line-height: 160%;
	}

	svg {
		color: ${(props) => props.theme['base-blue']};
		height: 0.75rem;
		width: 0.75rem;
	}
`

export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 130%;
		color: ${(props) => props.theme['base-title']};
	}

	p {
		color: ${(props) => props.theme['base-text']};

		line-height: 160%;
		margin-bottom: 1.5rem;
	}
`

export const InfoContainer = styled.div`
	display: flex;
	gap: 1.5rem;

	color: ${(props) => props.theme['base-subtitle']};
	line-height: 160%;

	& > div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	div > svg {
		width: 1.125rem;
		height: 1.125rem;
	}
`
