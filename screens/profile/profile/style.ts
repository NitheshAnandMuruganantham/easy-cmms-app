import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "90%",
    marginLeft: "5%",
  },

  button: {
    borderRadius: 5,
    marginLeft: "10%",
    width: "80%",
  },
  secondaryText: {
    marginLeft: "2.5%",
    fontFamily: "Poppins-Light",
    fontSize: 15,
    marginBottom: 30,
  },
  primaryText: {
    marginTop: 50,
    marginLeft: "2.5%",
    fontFamily: "Poppins-SemiBold",
    fontSize: 25,
  },
});

export default style;
