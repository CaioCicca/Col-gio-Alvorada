import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  userText: {
    top:-5, 
  },
  image:{
    width: 170,
    height: 220,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#274696",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  nome:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#274696"
  },
  texto:{
    fontSize: 16,
  },
  texto1:{
    fontSize: 16,
    color: "#274696",
    fontWeight: "bold",
  },
  sobre:{
    fontSize: 35,
    color: "#274696",
    fontWeight: "bold",
    textAlign: "center",
  },
  texto2:{
    fontSize: 20,
    textAlign: "justify",
    padding: 15
  },
  scroll:{
    width: '100%',
    height: 400,
  }
});

export default styles;
