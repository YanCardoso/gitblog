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
      color: ${(props) => props.theme['base-subtitle']};
      font-family: Nunito;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
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
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }

  input:focus {
    border: 1px solid ${(props) => props.theme['base-blue']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    line-height: 160%; /* 1.6rem */
  }
`
