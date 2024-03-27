import { View, Text } from "react-native";

import styles from "./styles";

const Escolas = ({ nome, cidade, estado, telefone }) => {
  return (
    <View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{cidade},{estado}</Text>
      <Text style={styles.nome}>{telefone}</Text>
    </View>
  );
};

export default Escolas;
