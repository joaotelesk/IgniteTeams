import { HighLinght } from "@components/HighLight";
import { Container } from "./styles";
import { Header } from "@components/Header";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLinght title="Turmas" subTitle="Jogue com a sua turma" />
    </Container>
  );
}
