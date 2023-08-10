import { useNavigate } from 'react-router-dom'
import img404 from '../../assets/404.svg'

import { ButtonHome, ErrorContainer } from './styles'
export function NotFound() {
  const navigate = useNavigate()

  function handleBackToHome() {
    navigate('/')
  }

  return (
    <ErrorContainer>
      <img
        src={img404}
        alt="404Error"
      />
      <ButtonHome onClick={handleBackToHome}>Home</ButtonHome>
    </ErrorContainer>
  )
}
