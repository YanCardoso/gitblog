import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import {
	CardPost,
	CardsGrid,
	HomeContainer,
	TextOverflow,
	TimeAgoBadge,
} from './styles'

export function Home() {
	return (
		<HomeContainer>
			<Profile variant='home'/>
			<SearchBox />
			<CardsGrid>
				<CardPost>
					<h2>JavaScript data types and data structures</h2>
					<TimeAgoBadge>Há 1 dia</TimeAgoBadge>
					<TextOverflow>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
							distinctio excepturi fugiat a illum praesentium ipsum, veniam
							adipisci ullam fugit nisi nemo veritatis, eum rerum? Atque
							repellendus maxime error in. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Excepturi cupiditate, distinctio,
							minus dolorum doloribus quam enim voluptas unde ab, ea architecto
							sapiente ipsam accusamus illo labore officiis doloremque iusto
							aspernatur!
						</p>
					</TextOverflow>
				</CardPost>
				<CardPost>
					<h2>JavaScript data types and data structures</h2>
					<TimeAgoBadge>Há 1 dia</TimeAgoBadge>
					<TextOverflow>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
							distinctio excepturi fugiat a illum praesentium ipsum, veniam
							adipisci ullam fugit nisi nemo veritatis, eum rerum? Atque
							repellendus maxime error in. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Excepturi cupiditate, distinctio,
							minus dolorum doloribus quam enim voluptas unde ab, ea architecto
							sapiente ipsam accusamus illo labore officiis doloremque iusto
							aspernatur!
						</p>
					</TextOverflow>
				</CardPost>
				<CardPost>
					<h2>JavaScript data types and data structures</h2>
					<TimeAgoBadge>Há 1 dia</TimeAgoBadge>
					<TextOverflow>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a
							non quidem similique nulla cupiditate et nesciunt sapiente. Ipsa
							soluta libero hic dicta esse aspernatur natus tenetur quaerat quod
							optio! aspernatur!
						</p>
					</TextOverflow>
				</CardPost>
			</CardsGrid>
		</HomeContainer>
	)
}
