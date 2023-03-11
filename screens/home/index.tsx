import React, { FunctionComponent, useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "@rneui/base";
import axios from "../../utils/axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import RefetchContext from "../../context/refetchContext";
import { useInterval } from "../../utils/interval";
const Home = (props) => {
  const [data, SetData] = React.useState<any>({});
  const [loading, SetLoading] = useState(true);
  const [refetchApi, setRefetchApi] = React.useContext(RefetchContext);

  const refetch = () => {
    SetLoading(true);
    axios
      .get("/dashboard/mobileDashboard")
      .then((resp) => {
        SetData(resp.data);
        SetLoading(false);
        setRefetchApi(false);
      })
      .catch(() => {
        SetLoading(false);
        setRefetchApi(false);
        alert("something went wrong !");
      });
  };

  // useInterval(() => {
  //   axios
  //     .get("/dashboard/mobileDashboard")
  //     .then((resp) => {
  //       SetData(resp.data);
  //       setRefetchApi(false);
  //     })
  //     .catch(() => {});
  // }, 10000);

  React.useEffect(() => {
    refetch();
  }, [refetchApi]);

  return (
    <View
      style={{
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <Spinner visible={loading} textContent={"Loading..."} />
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
