import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GitContextProvide {
  children: ReactNode
}

type PostProps = {
  body: string
  comments: number
  created_at: string
  number: number
  title: string
  html_url: string
}

type UserProps = {
  login: string
  avatar: string
  urlUser: string
  name: string
  location: string
  bio: string
  publicRepos: number
  following: number
  created_at: string
  updated_at: string
}

interface GitContextTypes {
  user: UserProps
  posts: PostProps[]
  createPost: (id: number) => void
  currentBlogPost: PostProps | undefined
}

export const GitContext = createContext({} as GitContextTypes)

export function GitContextProvider({ children }: GitContextProvide) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [currentBlogPost, setCurrentBlogPost] = useState<PostProps | undefined>(
    {} as PostProps,
  )
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function getUser() {
    const response = await api.get('/users/YanCardoso')
    const data = response.data
    const result = {
      login: data.login,
      avatar: data.avatar_url,
      urlUser: data.html_url,
      name: data.name,
      location: data.location,
      bio: data.bio,
      publicRepos: data.public_re,
      following: data.following,
      created_at: data.created_at,
      updated_at: data.updated_at,
    }

    setUser(result)
  }

  function createPost(id: number) {
    const currentPost = posts.find((p) => p.number === id)
    setCurrentBlogPost(currentPost)
  }

  async function getPosts() {
    const response = await api.get('/repos/YanCardoso/gitblog/issues')
    const { data } = response

    const dataPost = data.map(
      (data: {
        body: string
        comments: string
        created_at: string
        number: string
        title: string
        html_url: string
      }) => {
        return {
          body: data.body,
          comments: data.comments,
          created_at: data.created_at,
          number: data.number,
          title: data.title,
          html_url: data.html_url,
        }
      },
    )

    setPosts(dataPost)
  }

  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <GitContext.Provider value={{ user, posts, createPost, currentBlogPost }}>
      {children}
    </GitContext.Provider>
  )
}
