import Axios from "axios";

import network from "../constants/network";
import { Logger } from "./logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
let axios = Axios.create({
  baseURL: `${network.server}`,
});

axios.interceptors.request.use(async (request) => {
  request.headers["Authorization"] = `Bearer ${await AsyncStorage.getItem(
    "accessToken"
  )}`;
  // new Logger("AXIOS").network(`Request: ${JSON.stringify(request, null, 2)}`);
  return request;
});

// axios.interceptors.response.use((response) => {
//   new Logger("AXIOS").network(`Response: ${JSON.stringify(response, null, 2)}`);
//   return response;
// });

export default axios;
