import React, { FunctionComponent, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "@rneui/base";
import { useRoute } from "@react-navigation/native";
import UserContext from "../../context/userContext";
import axios from "../../utils/axios";
const Home = (props) => {
  const [data, SetData] = React.useState<any>({});
  const userData = useContext(UserContext);

  React.useEffect(() => {
    axios
      .get("/dashboard/mobileDashboard")
      .then((resp) => {
        console.log(resp);
        SetData(resp.data);
      })
      .catch(() => {
        alert("something went wrong !");
      });
  }, []);

  return (
    <View
      style={{
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <DisplayCard
        textColor="white"
        bgColor="red"
        name="PENDING MAINTENANCES"
        value={
          typeof data?.openMaintenanceCount === "number"
            ? data?.openMaintenanceCount
            : "--"
        }
      />
      <DisplayCard
        textColor="white"
        bgColor="green"
        name="ACTIVE TICKETS"
        value={
          typeof data?.openTicketCount === "number"
            ? data?.openTicketCount
            : "--"
        }
      />

      <DisplayCard
        bgColor="yellow"
        textColor="black"
        textStyle={{
          fontSize: 20,
          textAlign: "center",
        }}
        name="UPCOMING TASK"
        value={data?.nextMaintenance ? data?.nextMaintenance.name : "--"}
      />
    </View>
  );
};

export default Home;

const DisplayCard: FunctionComponent<{
  name: string;
  value: any;
  textColor: string;
  bgColor: string;
  textStyle?: any;
}> = (props) => {
  return (
    <Card
      containerStyle={{
        borderRadius: 10,
        backgroundColor: props.bgColor,
      }}
      wrapperStyle={{}}
    >
      <Card.Title
        style={{
          color: props.textColor,
        }}
      >
        {props.name}
      </Card.Title>
      <View
        style={{
          position: "relative",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            color: props.textColor,
            ...props.textStyle,
          }}
        >
          {props.value}
        </Text>
      </View>
    </Card>
  );
};
