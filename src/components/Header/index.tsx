import { Container, Logo, BackIcon, BackButton} from './styles';
import LogoImg from '@assets/logo.png'

interface IHeader {
  showBackButton?: boolean
}

export function Header({showBackButton = false}: IHeader) {
  return(
    <Container>
      {
        showBackButton && 
        (
          <BackButton>
            <BackIcon />
          </BackButton>
        )
      }
      <Logo source={LogoImg}/>
    </Container>
  )
}