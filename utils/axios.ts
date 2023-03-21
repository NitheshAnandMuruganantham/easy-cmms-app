import Axios from "axios";
import SuperTokens from "supertokens-react-native";

import network from "../constants/network";
import { Logger } from "./logger";
let axios = Axios.create({
  baseURL: `${network.server}`,
});

let count = 0;

SuperTokens.addAxiosInterceptors(axios);
axios.interceptors.response.use(async (response) => {
  return response;
});

axios.interceptors.request.use((request) => {
  // new Logger("AXIOS").network(`Request: ${JSON.stringify(request, null, 2)}`);
  return request;
});

axios.interceptors.response.use((response) => {
  // new Logger("AXIOS").network(`Response: ${JSON.stringify(response, null, 2)}`);
  return response;
});

export default axios;
