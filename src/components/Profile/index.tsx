import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faCalendarDays,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  InfoContainer,
  LinkBack,
  LinkGit,
  LinkGitPost,
  PostHeader,
  ProfileContainer,
  ProfileContent,
} from './styles'
import { useContext } from 'react'
import { GitContext } from '../../context/GitContext'

interface ProfileTypeProps {
  variant: 'home' | 'post'
}

export function Profile({ variant = 'home' }: ProfileTypeProps) {
  const { user } = useContext(GitContext)

  if (variant === 'home') {
    return (
      <ProfileContainer variant={variant}>
        <img
          src={user.avatar}
          alt=""
        />
        <LinkGit href={user.urlUser}>
          <span>GITHUB</span>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </LinkGit>
        <ProfileContent variant="home">
          <h1>{user.name}</h1>
          <p>
            {user.bio}
          </p>
          <InfoContainer>
            <div>
              <FontAwesomeIcon icon={faGithubAlt} />
              <span>{user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Lab</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{`${user.following} seguidores`}</span>
            </div>
          </InfoContainer>
        </ProfileContent>
      </ProfileContainer>
    )
  } else if (variant === 'post') {
    return (
      <ProfileContainer variant={variant}>
        <ProfileContent variant="post">
          <PostHeader>
            <LinkBack>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </LinkBack>
            <LinkGitPost href="#">
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </LinkGitPost>
          </PostHeader>
          <h1>JavaScript data types and data structures</h1>
          <InfoContainer>
            <div>
              <FontAwesomeIcon icon={faGithubAlt} />
              <span>YanCardoso</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>Há 1 dia</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>34 comentários</span>
            </div>
          </InfoContainer>
        </ProfileContent>
      </ProfileContainer>
    )
  }
}
