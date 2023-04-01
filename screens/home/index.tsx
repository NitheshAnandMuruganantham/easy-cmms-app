import React, { FunctionComponent, useContext, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Button, Card } from "@rneui/base";
import axios from "../../utils/axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import RefetchContext from "../../context/refetchContext";
import { useInterval } from "../../utils/interval";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeHeader from "../../components/navigationHeaders/home";
import NewWorkOrder from "./newWorkOrder/newWorkOrder";
import UserContext from "../../context/userContext";

const colors = [
  "#6A0DAD",
  "#8B008B",
  "#C54B8C",
  "#C70039",
  "#900C3F",
  "#FF5733",
  "#FFC300",
  "#DAF7A6",
  "#FFC300",
  "#FF5733",
  "#900C3F",
  "#C70039",
  "#C54B8C",
  "#8B008B",
  "#6A0DAD",
];

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
      })
      .catch(() => {
        SetLoading(false);
        alert("something went wrong !");
      });
  };

  useInterval(() => {
    axios
      .get("/dashboard/mobileDashboard")
      .then((resp) => {
        SetData(resp.data);
      })
      .catch(() => {});
  }, 10000);

  React.useEffect(() => {
    console.log("refetching home");
    refetch();
  }, [refetchApi]);
  const user = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <HomeHeader />

      <ScrollView
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Spinner visible={loading} textContent={"Loading..."} />
        <Card
          containerStyle={{
            borderRadius: 10,
            backgroundColor: "#FF5733",
          }}
        >
          <Card.Title
            style={{
              fontSize: 15,
              color: "white",
            }}
          >
            WELCOME {user?.name} ({user?.id})
          </Card.Title>
        </Card>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {data &&
            Object.keys(data).map((key, i) => {
              return (
                <DisplayCard
                  key={key}
                  name={key.replace(/_/g, " ")}
                  value={data[key]}
                  textColor={"white"}
                  bgColor={i + 1 > colors.length ? colors[0] : colors[i]}
                />
              );
            })}
        </View>
      </ScrollView>
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
        width: "42%",
        backgroundColor: props.bgColor,
      }}
      wrapperStyle={{}}
    >
      <Card.Title
        style={{
          fontSize: 15,
          fontStyle: "italic",
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
            fontSize: 60,
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
