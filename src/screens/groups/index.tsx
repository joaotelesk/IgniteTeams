import { useState } from "react";
import { FlatList } from "react-native";

import { HighLinght } from "@components/HighLight";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Rocket",
    "amigos",
  ]);
  return (
    <Container>
      <Header />
      <HighLinght title="Turmas" subTitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => console.log("fui clicado")} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="que tal castrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
