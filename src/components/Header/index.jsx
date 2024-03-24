import { View, Image} from "react-native";

import styles from "./styles";

import TouchButton from '../TouchButton'

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchButton route='Home' title='Home'>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      </TouchButton>
    </View>
  );
};

export default Header;
