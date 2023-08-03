import { useContext } from 'react'
import { SearchBoxContainer } from './styles'
import { GitContext } from '../../context/GitContext'

export function SearchBox() {
  const { posts } = useContext(GitContext)

  return (
    <SearchBoxContainer>
      <header>
        <h2>Publicações</h2>
        <span>
          {posts.length > 1
            ? `${posts.length} publicações`
            : `${posts.length} publicação`}
        </span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchBoxContainer>
  )
}
