import { createTheme } from "@rneui/themed";

const Theme = createTheme({
  mode: "light",
  components: {
    Input(props, theme) {
      return {
        style: {
          fontFamily: "Poppins-Regular",
        },

        inputContainerStyle: {
          paddingLeft: 10,
          paddingRight: 10,
          borderWidth: 2,
          borderBottomWidth: 2,
          borderRadius: 10,
          // backgroundColor: "yellow",
        },
      };
    },
  },
});

export default Theme;
