import gitLogo from '../../assets/git-logo.svg';
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={gitLogo} alt="" />
    </HeaderContainer>
  )
}