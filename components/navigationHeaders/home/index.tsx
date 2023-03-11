import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import EntoDesign from "react-native-vector-icons/Entypo";
import IoniconsDesign from "react-native-vector-icons/Ionicons";

import { Button } from "@rneui/themed";

import RaiseTicket from "../../../screens/tickets/raise-ticket";
import client from "../../../utils/apollo";
import UserContext from "../../../context/userContext";
import Supertokens from "supertokens-react-native";
import RefetchContext from "../../../context/refetchContext";

interface HomeHeaderProps {}

const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const userdata = useContext(UserContext);
  const [refetch, SetRefetch] = useContext(RefetchContext);
  const refetchData = () => {
    client
      .refetchQueries({
        include: ["Maintenance"],
      })
      .catch(() => null);

    client
      .refetchQueries({
        include: ["Maintenance"],
      })
      .catch(() => null);
    SetRefetch(true);
  };

  return (
    <View
      style={{
        display: "flex",
        width: "95%",
        marginLeft: "2.5%",
        height: 100,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      {userdata?.role === "SUPERVISOR" ? (
        <Button
          onPress={() => setIsVisible(true)}
          type="solid"
          titleStyle={{
            fontFamily: "Poppins-Medium",
            marginLeft: 10,
          }}
          buttonStyle={{
            borderRadius: 50,
          }}
        >
          <EntoDesign name="plus" size={20} color="white" />
          Raise Issue
        </Button>
      ) : (
        <Button
          type="solid"
          titleStyle={{
            fontFamily: "Poppins-Medium",
            marginLeft: 10,
          }}
          buttonStyle={{
            borderRadius: 50,
          }}
        >
          easy CMMS
        </Button>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          type="solid"
          onPress={() => {
            refetchData();
          }}
          buttonStyle={{ borderRadius: 50 }}
        >
          <IoniconsDesign name="refresh" size={28} color="white" />
        </Button>
        <Button
          type="solid"
          onPress={() => {
            Supertokens.signOut();
          }}
          buttonStyle={{ borderRadius: 50, marginLeft: 20 }}
        >
          <IoniconsDesign name="log-out" size={28} color="white" />
        </Button>
      </View>
      <RaiseTicket isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};
export default HomeHeader;
