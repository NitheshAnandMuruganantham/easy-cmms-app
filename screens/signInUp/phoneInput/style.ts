import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    width: "90%",
    marginLeft: "5%",
  },

  input: {
    marginTop: 10,
    marginBottom: 30,
    fontFamily: "Poppins-Regular",
    width: "100%",
  },

  button: {
    borderRadius: 5,
    marginTop: 50,
    width: "100%",
  },
  secondaryText: {
    marginLeft: "2.5%",
    fontFamily: "Poppins-Light",
    fontSize: 15,
    marginBottom: 10,
  },
  primaryText: {
    marginTop: 30,
    marginLeft: "2.5%",
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
  },
});

export default style;
