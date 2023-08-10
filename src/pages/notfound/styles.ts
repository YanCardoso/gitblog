import { styled } from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0.5rem;
  bottom: calc(13.25rem - 7.75rem);
  img {
    margin: 0 auto;
    width: 100%;
    max-height: 340px;
    object-fit: contain;
  }
`
export const ButtonHome = styled.button`
  background-color: ${(props) => props.theme['base-blue']};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.white};
  line-height: 130%;
  font-weight: 700;
`
