import { styled } from 'styled-components'

export const SearchBoxContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	gap: 0.75rem;
	margin-top: 4.5rem;

	header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		h2 {
			color: var(--base-subtitle, #c4d4e3);
			font-family: Nunito;
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 160%;
		}

		span {
			color: var(--base-span, #7b96b2);
			text-align: right;

			/* Text/Text S */
			font-family: Nunito;
			font-size: 0.875rem;
			line-height: 160%; /* 1.4rem */
		}
	}

	input {
		display: flex;
		padding: 0.75rem 1rem;
		align-items: center;
		gap: 0.5rem;

		border-radius: 6px;
		border: 1px solid var(--base-border, #1c2f41);
		background: var(--base-input, #040f1a);
	}

	input:focus {
border: 1px solid var(--brand-blue, #3294F8);
	}

	input::placeholder {
		color: var(--base-label, #3a536b);

		font-weight: 400;
		line-height: 160%; /* 1.6rem */
	}
`
