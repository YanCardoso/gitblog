import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  position: relative;
  bottom: calc(13.25rem - 7.75rem);
`
export const CardsGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  grid-gap: 2rem;
  margin-top: 3rem;
`

export const CardPost = styled.main`
  display: flex;
  position: relative;
  height: 16.3rem;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  background: var(--base-post, #112131);
  border: 2px solid transparent;

  h2 {
    color: var(--base-title, #e7edf4);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%; /* 2rem */
    max-width: 17.6875rem;
  }

  &:hover {
    border: 2px solid var(--base-label, #3a536b);
    cursor: pointer;
  }
`
export const TextOverflow = styled.div`
  height: 7rem;
  margin-top: 1.25rem;

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: var(--base-text, #afc2d4);
    line-height: 160%; /* 1.6rem */
  }
`

export const TimeAgoBadge = styled.span`
  position: absolute;
  right: 2rem;
  top: 2.31rem;
  color: var(--base-span, #7b96b2);

  font-size: 0.875rem;
  line-height: 160%; /* 1.4rem */
`
