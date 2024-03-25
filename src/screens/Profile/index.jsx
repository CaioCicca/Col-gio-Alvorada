import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import Header from "../../components/Header";
import TouchButton from "../../components/TouchButton";
import { perfil } from "../../data/Perfil";

export default function Profile() {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.user}>
        <View style={styles.userImage}>
          <Image source={require('../../../assets/eu.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.userText}>
          <Text style={styles.name}>{perfil.nome}</Text>
          <Text style={styles.email}>{perfil.idade}</Text>
          <Text style={styles.email}>{perfil.email}</Text>
          <Text style={styles.name}>{perfil.telefone}</Text>
        </View>
      </View>
    </View>
  );
}
