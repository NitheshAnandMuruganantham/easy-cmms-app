import Axios from "axios";
import SuperTokens from "supertokens-react-native";

import network from "../constants/network";
import { checkProfileStatus } from "./auth";
import { Logger } from "./logger";
let axios = Axios.create({
  baseURL: `${network.server}`,
});

SuperTokens.addAxiosInterceptors(axios);
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (
      error.response.status === 401 ||
      error.response.status === 403 ||
      error.response.status === 404 ||
      error.response.status === 500
    ) {
      await checkProfileStatus(axios);
    }
    return error;
  }
);

axios.interceptors.request.use((request) => {
  new Logger("AXIOS").network(`Request: ${JSON.stringify(request, null, 2)}`);
  return request;
});

axios.interceptors.response.use((response) => {
  new Logger("AXIOS").network(`Response: ${JSON.stringify(response, null, 2)}`);
  console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});

export default axios;
