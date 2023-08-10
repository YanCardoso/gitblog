import { useContext } from 'react'
import { SearchBoxContainer } from './styles'
import { GitContext } from '../../context/GitContext'
import { useForm } from 'react-hook-form'

export function SearchBox() {
  const { posts, searchPost } = useContext(GitContext)
  const { register, getValues, reset } = useForm({
    defaultValues: { search: '' },
  })

  function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      searchPost(getValues('search'))
      reset()
    }
  }

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
        {...register('search')}
        onKeyDown={handleSearch}
      />
    </SearchBoxContainer>
  )
}
