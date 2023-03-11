import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    display: "flex",
  },
  input: {
    color: "white",
    fontFamily: "Poppins-Bold",
    borderColor: "blue",
    backgroundColor: "#7743DB",
    borderRadius: 5,
  },
  secondaryText: {
    marginLeft: "2.5%",
    fontFamily: "Poppins-Light",
    fontSize: 15,
  },
  primaryText: {
    marginTop: 30,
    marginLeft: "2.5%",
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
  },
  resend: {
    marginLeft: "5%",
    fontFamily: "Poppins-Regular",
    color: "#7743DB",
    marginTop: 25,
  },
  inputContainer: {
    width: "90%",
    height: 20,
    marginTop: 30,
    marginLeft: "5%",
  },
});

export default style;
