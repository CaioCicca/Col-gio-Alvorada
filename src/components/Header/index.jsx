import { View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image source={require('../../../assets/a.png')} style={styles.fundo} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
