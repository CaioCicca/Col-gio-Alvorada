import { View, Image, ScrollView, Text } from "react-native";
import { useEffect, useNavigation, useState } from "react";

import styles from "./styles";
import lista from "../../Models/ListaEscolas";
import Header from "../../components/Header";

export default function Detalhes(id) {
  const navigation = useNavigation();
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    const escola = lista.getLista();
    setAllList(escola);
  });

  return (
    <View style={styles.container}>
      <Header />
        {allList.map((escola) => (
          escola.id == id ? (
        allList.map((escola) => (
      <View key={escola.id}>
        <View>
          <Text>Nome:</Text>
          <Text>{escola.nome}</Text>
        </View>
        <View>
          <Text>Cor Primária:</Text>
          <Text>{escola.corPrimaria}</Text>
        </View>
        <View>
          <Text>Cor Secundária:</Text>
          <Text>{escola.corSecundaria}</Text>
        </View>
        <View>
          <Text>Quantidade de Funcionários:</Text>
          <Text>{escola.quantidadeFuncionarios}</Text>
        </View>
        <View>
          <Text>Capacidade de Alunos por ano:</Text>
          <Text>{escola.capacidadeAlunosPorAno}</Text>
        </View>
        <View>
          <Text>Quantidade de turmas:</Text>
          <Text>{escola.quantidadeTurmas}</Text>
        </View>
        <View>
          <Text>Bairro:</Text>
          <Text>{escola.endereco.bairro}</Text>
        </View>
        <View>
          <Text>Numero:</Text>
          <Text>{escola.endereco.numero}</Text>
        </View>
        <View>
          <Text>Cidade:</Text>
          <Text>{escola.endereco.cidade}</Text>
        </View>
        <View>
          <Text>Estado:</Text>
          <Text>{escola.endereco.estado}</Text>
        </View>
        <View>
          <Text>Telefone:</Text>
          <Text>{escola.telefone}</Text>
        </View>
        <View>
          <View>
            <Text>Email:</Text>
            <Text>{escola.email}</Text>
          </View>
          <Text>Responsavel:</Text>
          <Text>{escola.responsavel}</Text>
        </View>
      </View>))) : (
      <View>
      <Text>Carregando...</Text>
    </View>
      )))}
    </View>
  );
}
