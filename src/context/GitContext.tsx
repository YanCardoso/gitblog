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
  searchPost: (query: string) => void
  currentBlogPost: PostProps | undefined
}

export const GitContext = createContext({} as GitContextTypes)

export function GitContextProvider({ children }: GitContextProvide) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [currentBlogPost, setCurrentBlogPost] = useState<PostProps | undefined>(
    undefined,
  )
  const [isDataLoaded, setIsDataLoaded] = useState(false)

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

  async function searchPost(query: string) {
    if (query !== '') {
      const queryEncode = encodeURIComponent(query)
      const response = await api.get(
        `/search/issues?q=repo:yancardoso/gitblog+is:issue+${queryEncode}+in:title,body`,
      )
      const dataResult = response.data
      const dataformat = formatPost(dataResult.items)
      setPosts(dataformat)
    }
  }

  async function createPost(id: number) {
    if (isDataLoaded) {
      const newPost = posts.find((post) => post.number === id)
      setCurrentBlogPost(newPost)
    } else {
      const response = await api.get(`/repos/YanCardoso/gitblog/issues/${id}`)
      const { data } = response
      const formatResponse: PostProps = {
        body: data.body,
        comments: data.comments,
        created_at: data.created_at,
        number: data.number,
        title: data.title,
        html_url: data.html_url,
      }
      setCurrentBlogPost(formatResponse)
    }
  }

  function formatPost(posts: PostProps[]) {
    const newPostsFormatted = posts.map((post) => {
      return {
        body: post.body,
        comments: post.comments,
        created_at: post.created_at,
        number: post.number,
        title: post.title,
        html_url: post.html_url,
      }
    })

    return newPostsFormatted
  }

  async function getPosts() {
    const response = await api.get('/repos/YanCardoso/gitblog/issues')
    const { data } = response

    const dataPost = formatPost(data)

    setPosts(dataPost)
    setIsDataLoaded(true)
  }

  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <GitContext.Provider
      value={{ user, posts, createPost, currentBlogPost, searchPost }}
    >
      {children}
    </GitContext.Provider>
  )
}
