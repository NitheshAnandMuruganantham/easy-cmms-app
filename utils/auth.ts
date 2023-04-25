import { AxiosInstance } from "axios";
import SuperTokens from "supertokens-react-native";
import network from "../constants/network";

export const checkProfileStatus = async (
  axios: AxiosInstance,
  setUser?: any
) => {
  try {
    await SuperTokens.attemptRefreshingSession();
    console.info("fetching profile exists status");
    const profileExists = await axios.get(
      `${network.server}/me/profile/status`
    );
    console.info("fetching profile exists status");
    console.log(profileExists);
    if (profileExists?.data && setUser) {
      setUser(profileExists.data);
      return "SESSION_CREATED";
    } else {
      return "PROFILE_INCOMPLETE";
    }
  } catch {
    SuperTokens.signOut();
    return "SIGN_OUT";
  }
};
