import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import {
  CardPost,
  CardsGrid,
  HomeContainer,
  TextOverflow,
  TimeAgoBadge,
} from './styles'
import { GitContext } from '../../context/GitContext'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const { posts, createPost } = useContext(GitContext)
  const navigate = useNavigate()

  function handleChangeToPost(id: number) {
    createPost(id)
    navigate('/post/' + id)
  }

  return (
    <HomeContainer>
      <Profile variant="home" />
      <SearchBox />
      <CardsGrid>
        {posts.map((post) => (
          <CardPost
            key={post.number}
            onClick={() => handleChangeToPost(post.number)}
          >
            <h2>{post.title}</h2>
            <TimeAgoBadge>Há 1 dia</TimeAgoBadge>
            <TextOverflow>
              <p>{post.body}</p>
            </TextOverflow>
          </CardPost>
        ))}
      </CardsGrid>
    </HomeContainer>
  )
}
