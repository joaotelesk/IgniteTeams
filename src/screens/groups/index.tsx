import { HighLinght } from "@components/HighLight";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLinght title="Turmas" subTitle="Jogue com a sua turma" />
      <GroupCard
        title="Nome da turma"
        onPress={() => console.log("fui clicado")}
      />
    </Container>
  );
}
