import { Text, View, Image, ScrollView } from "react-native";

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
          <Text style={styles.nome}>{perfil.nome}</Text>
          <Text style={styles.texto1}>Idade:</Text>
          <Text style={styles.texto}>{perfil.idade}</Text>
          <Text style={styles.texto1}>E-mail:</Text>
          <Text style={styles.texto}>{perfil.email}</Text>
          <Text style={styles.texto1}>Telefone:</Text>
          <Text style={styles.texto}>{perfil.telefone}</Text>
          <Text style={styles.texto1}>CPF:</Text>
          <Text style={styles.texto}>{perfil.cpf}</Text>
        </View>
      </View>
      <Text style={styles.sobre}>Sobre Mim:</Text>
      <ScrollView style={styles.scroll}>
      <Text style={styles.texto2}>Estudante de Desenvolvimento de Sistemas no Instituto SENAI de Valinhos e cursando 3ºano do ensino medio na escola SESI de Valinhos. Comprometido com a excelência técnica, meu tempo livre é saboreado na cozinha, mergulhado em jogos e imerso em séries. Busco integrar minha paixão por tecnologia com o prazer de explorar diferentes sabores e narrativas. Além disso, essa diversidade de interesses me proporciona uma visão multifacetada do mundo, incentivando-me a buscar conexões inovadoras entre a tecnologia, a culinária e as narrativas, e inspirando-me a encontrar soluções criativas para os desafios que encontro tanto na sala de aula quanto na vida cotidiana.
      </Text>
      </ScrollView>
    </View>
  );
}
