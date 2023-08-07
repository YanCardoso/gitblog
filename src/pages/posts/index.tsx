import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { PostContainer, PostContent } from './styles'
import { GitContext } from '../../context/GitContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function Posts() {
  const { currentBlogPost } = useContext(GitContext)
  console.log(currentBlogPost)

  if (currentBlogPost !== undefined) {
    return (
      <PostContainer>
        <Profile variant="post" />
        <PostContent>
          <ReactMarkdown>{currentBlogPost.body}</ReactMarkdown>
        </PostContent>
      </PostContainer>
    )
  } else {
    return (
      <PostContainer>
        <Profile variant="post" />
      </PostContainer>
    )
  }
}
