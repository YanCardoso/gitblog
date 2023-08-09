import { useContext, useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { PostContainer, PostContent } from './styles'
import { GitContext } from '../../context/GitContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'

export function Posts() {
  const { currentBlogPost, createPost } = useContext(GitContext)
  const { id } = useParams()

  function recreatePost() {
    createPost(Number(id))
  }

  useEffect(() => {
    recreatePost()
  }, [])

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
