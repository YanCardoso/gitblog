import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  InfoContainer,
  LinkGit,
  ProfileContainer,
  ProfileContent,
} from './styles'

export function Profile() {
	return (
		<ProfileContainer>
			<img
				src='https://avatars.githubusercontent.com/YanCardoso'
				alt=''
			/>
				<LinkGit href='#'>
					<span>GITHUB</span>
					<FontAwesomeIcon icon={faUpRightFromSquare} />
				</LinkGit>
			<ProfileContent>
				<h1>Yan Cardoso</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					est unde iusto, beatae deserunt vero placeat, in reprehenderit
					deleniti sint obcaecati tempore labore odio at sit ipsa totam nesciunt
					rem.
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
}
