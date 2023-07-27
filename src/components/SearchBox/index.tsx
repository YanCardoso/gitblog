import { SearchBoxContainer } from "./styles";

export function SearchBox() {
	return (
		<SearchBoxContainer>
			<header>
				<h2>Publicações</h2>
				<span>6 publicações</span>
			</header>
      <input type="text" placeholder="Buscar conteúdo"/>
		</SearchBoxContainer>
	)
}
