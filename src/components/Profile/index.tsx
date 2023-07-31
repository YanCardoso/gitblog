import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {
	faBuilding,
	faCalendarDays,
	faChevronLeft,
	faComment,
	faUpRightFromSquare,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	InfoContainer,
	LinkBack,
	LinkGit,
	LinkGitPost,
	PostHeader,
	ProfileContainer,
	ProfileContent,
} from './styles'

interface ProfileTypeProps {
	variant: 'home' | 'post'
}

export function Profile({ variant = 'home' }: ProfileTypeProps) {
	if (variant === 'home') {
		return (
			<ProfileContainer variant={variant}>
				<img
					src='https://avatars.githubusercontent.com/YanCardoso'
					alt=''
				/>
				<LinkGit href='#'>
					<span>GITHUB</span>
					<FontAwesomeIcon icon={faUpRightFromSquare} />
				</LinkGit>
				<ProfileContent variant='home'>
					<h1>Yan Cardoso</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						est unde iusto, beatae deserunt vero placeat, in reprehenderit
						deleniti sint obcaecati tempore labore odio at sit ipsa totam
						nesciunt rem.
					</p>
					<InfoContainer>
						<div>
							<FontAwesomeIcon icon={faGithubAlt} />
							<span>YanCardoso</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faBuilding} />
							<span>Lab</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faUserGroup} />
							<span>45 Seguidores</span>
						</div>
					</InfoContainer>
				</ProfileContent>
			</ProfileContainer>
		)
	} else if (variant === 'post') {
		return (
			<ProfileContainer variant={variant}>
				<ProfileContent variant='post'>
					<PostHeader>
						<LinkBack>
							<FontAwesomeIcon icon={faChevronLeft} />
							<span>VOLTAR</span>
						</LinkBack>
						<LinkGitPost href='#'>
							<span>VER NO GITHUB</span>
							<FontAwesomeIcon icon={faUpRightFromSquare} />
						</LinkGitPost>
					</PostHeader>
					<h1>JavaScript data types and data structures</h1>
					<InfoContainer>
						<div>
							<FontAwesomeIcon icon={faGithubAlt} />
							<span>YanCardoso</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faCalendarDays} />
							<span>Há 1 dia</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faComment} />
							<span>34 comentários</span>
						</div>
					</InfoContainer>
				</ProfileContent>
			</ProfileContainer>
		)
	}
}
