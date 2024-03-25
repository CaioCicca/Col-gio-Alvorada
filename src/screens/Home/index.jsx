import { View, Image, ScrollView, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroll}>
          <Image source={require('../../../assets/b.jpg')} style={styles.banner} />
          <Image source={require('../../../assets/c.png')} style={styles.titulo} />
          <Title title={'Bem-vindo ao Colégio Alvorada: Onde o Amanhecer do Conhecimento Começa!'}></Title>
          <Text style={{fontSize:16}}>
            É com imensa alegria que apresentamos o Colégio Alvorada, uma instituição educacional bilingue que abre suas portas para receber alunos e famílias em busca de excelência acadêmica e multiculturalidade. Localizado no coração de nossa comunidade, o Colégio Alvorada é mais do que uma escola; é um ambiente dinâmico e acolhedor, onde cada aluno é encorajado a explorar seu potencial máximo, enquanto se torna um cidadão do mundo. Fundado no início de 2024, o Colégio Alvorada orgulha-se de oferecer um currículo educacional enriquecido, que combina os mais altos padrões acadêmicos com uma abordagem intercultural. Nossa equipe de educadores altamente qualificados está empenhada em proporcionar experiências de aprendizagem estimulantes, que promovem o pensamento crítico, a criatividade e a colaboração. No Colégio Alvorada, a fluência em mais de um idioma não é apenas uma habilidade, mas sim um modo de vida. Nossos alunos têm a oportunidade de se envolver em um ambiente verdadeiramente bilingue, onde o inglês e o português são igualmente valorizados e integrados em todas as facetas do currículo.
          </Text>
      </ScrollView>
    </View>
  );
}
