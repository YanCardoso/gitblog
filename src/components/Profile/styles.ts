import { css, styled } from 'styled-components'
import { Link } from 'react-router-dom'

interface ProfileContainerProps {
  variant: 'home' | 'post'
}

export const ProfileContainer = styled.div<ProfileContainerProps>`
  ${(props) => {
    if (props.variant === 'home') {
      return css`
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
    } else if (props.variant === 'post') {
      return css`
        display: flex;
        position: relative;
        height: 10.5rem;
        background: ${(props) => props.theme['base-profile']};
        padding: 2rem;
        gap: 2rem;
        border-radius: 10px;
      `
    }
  }}
`
export const PostHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
`

export const LinkBack = styled(Link)`
  display: flex;
  gap: 0.5rem;
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

export const LinkGitPost = styled.a`
  display: flex;
  gap: 0.5rem;
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

export const ProfileContent = styled.div<ProfileContainerProps>`
  ${(props) => {
    if (props.variant === 'home') {
      return css`
        display: flex;
        flex-direction: column;
        width: 100%;

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
    } else if (props.variant === 'post') {
      return css`
        display: flex;
        flex-direction: column;
        width: 100%;

        h1 {
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 130%;
          color: ${(props) => props.theme['base-title']};
        }
      `
    }
  }}
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
