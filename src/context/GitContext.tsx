import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GitContextProvide {
  children: ReactNode
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
}

export const GitContext = createContext({} as GitContextTypes)

export function GitContextProvider({ children }: GitContextProvide) {
  const [posts, setPosts] = useState([])
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

  async function getPosts() {
    const response = await api.get('/repos/YanCardoso/gitblog/issues')
    const { data } = response
    console.log(data);
    
    setPosts(data)
  }

  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return <GitContext.Provider value={{ user }}>{children}</GitContext.Provider>
}
