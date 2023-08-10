import { useContext, useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { PostContainer, PostContent } from './styles'
import { GitContext } from '../../context/GitContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
          <ReactMarkdown
            children={currentBlogPost.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{ backgroundColor: '#112131' }}
                  />
                ) : (
                  <code
                    {...props}
                    className={className}
                  >
                    {children}
                  </code>
                )
              },
            }}
          />
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
