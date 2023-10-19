import { Container, Title, SubTitle } from "./styles";

interface IHighLinght {
  title: string,
  subTitle: string
}

export function HighLinght({ title, subTitle }:IHighLinght) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </Container>
  )
}