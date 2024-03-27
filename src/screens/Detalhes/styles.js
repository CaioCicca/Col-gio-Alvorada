import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  banner:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:10
  },
  scroll:{
    top: 25,
    width: '100%',
    height: '80%',
    padding: 15,
    gap:20
  },
  titulo:{
    width: "100%",
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10
  }
});

export default styles;
