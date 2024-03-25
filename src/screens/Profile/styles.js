import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  image:{
    width: 170,
    height: 220,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#274696",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
