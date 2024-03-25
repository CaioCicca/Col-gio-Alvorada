import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fundo:{
    position:'absolute',
    height: 180,
    width: 500,
    
  },
  logo:{
    width: 200,
    height: 100,
    marginTop:30,
    alignItems:'center',
  },
  header:{
    flexDirection: "row",
    position:'fixed',
    top: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center", 
    margin:0,
    backgroundColor: "white",
  }
});

export default styles;
