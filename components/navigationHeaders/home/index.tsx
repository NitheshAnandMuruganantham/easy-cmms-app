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
import constants from "expo-constants";
import RaiseTicket from "../../../screens/tickets/raise-ticket";
import client from "../../../utils/apollo";
import UserContext from "../../../context/userContext";
import RefetchContext from "../../../context/refetchContext";
import RaiseMaintenance from "../../../screens/maintanance/raise-maintanance";
import NewWorkOrder from "../../../screens/home/newWorkOrder/newWorkOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../../context/authContext";

interface HomeHeaderProps {}

const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  const [showRaiseTicket, SetShowRaiseTicket] = useState(false);
  const [showRaiseMaintenance, setShowRaiseMaintenance] = useState(false);
  const [userData] = useContext(UserContext);
  const [authStatus, SetAuthStatus] = useContext(AuthContext);
  const [showNewWorkOrder, SetShowNewWorkOrder] = useState(false);
  const [refetch, SetRefetch] = useContext(RefetchContext);
  const refetchData = () => {
    SetRefetch((prev) => !prev);
  };

  return (
    <View
      style={{
        display: "flex",
        width: "95%",
        backgroundColor: "white",
        paddingTop: 10,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        paddingBottom: 15,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      {userData?.role === "SUPERVISOR" ||
      userData?.extra_roles.indexOf("SUPERVISOR") !== -1 ? (
        <Button
          onPress={() => SetShowRaiseTicket(true)}
          type="solid"
          //  @ts-ignore
          icon={<EntoDesign name="plus" size={20} color="white" />}
          titleStyle={{
            fontFamily: "Poppins-Medium",
            marginLeft: 10,
            marginTop: 3,
          }}
          buttonStyle={{
            borderRadius: 50,
          }}
        >
          Raise Issue
        </Button>
      ) : (
        <Button
          onPress={() => {
            if (
              userData?.role === "ADMIN" ||
              userData?.role === "MANAGER" ||
              userData?.extra_roles.indexOf("MANAGER") !== -1 ||
              userData?.extra_roles.indexOf("ADMIN") !== -1
            ) {
              SetShowNewWorkOrder(true);
            } else {
              setShowRaiseMaintenance(true);
            }
          }}
          type="solid"
          // @ts-ignore
          icon={<EntoDesign name="plus" size={20} color="white" />}
          titleStyle={{
            fontFamily: "Poppins-Medium",
            marginLeft: 10,
            marginTop: 3,
          }}
          buttonStyle={{
            borderRadius: 50,
          }}
        >
          Raise Work
        </Button>
      )}
      {userData?.extra_roles &&
        userData?.extra_roles.indexOf("SUPERVISOR") !== -1 && (
          <Button
            onPress={() => SetShowRaiseTicket(true)}
            type="solid"
            // @ts-ignore
            icon={<EntoDesign name="ticket" size={30} color="white" />}
            titleStyle={{
              fontFamily: "Poppins-Medium",
              marginLeft: 10,
              marginTop: 3,
            }}
            buttonStyle={{
              borderRadius: 50,
            }}
          />
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
          {/* @ts-ignore */}
          <IoniconsDesign name="refresh" size={28} color="white" />
        </Button>

        <Button
          type="solid"
          onPress={async () => {
            await AsyncStorage.clear();
            SetAuthStatus("UNAUTHORISED");
          }}
          buttonStyle={{
            borderRadius: 50,
            marginLeft: 20,
            backgroundColor: "#8B008B",
          }}
        >
          {/* @ts-ignore */}
          <IoniconsDesign name="log-out" size={28} color="white" />
        </Button>
      </View>
      <RaiseTicket
        isVisible={showRaiseTicket}
        setIsVisible={SetShowRaiseTicket}
      />
      <RaiseMaintenance
        isVisible={showRaiseMaintenance}
        setIsVisible={setShowRaiseMaintenance}
      />
      <NewWorkOrder
        isVisible={showNewWorkOrder}
        setIsVisible={(v) => {
          SetShowNewWorkOrder(v);
        }}
      />
    </View>
  );
};
export default HomeHeader;
