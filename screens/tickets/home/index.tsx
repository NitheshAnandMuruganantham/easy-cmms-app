import * as React from "react";
import { ScrollView } from "react-native";
import BodyHead from "../../../components/headTitle";
import TicketItem from "../../../components/ticketCard";
import style from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "../../../utils/axios";
import Toast from "react-native-root-toast";
import { useInterval } from "../../../utils/interval";
interface TicketHomeProps {
  navigation: StackNavigationProp<any>;
}

const TicketHome: React.FunctionComponent<TicketHomeProps> = (props) => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    axios
      .post("/tickets")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        Toast.show("Error fetching tickets", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP,
        });
        setLoading(false);
      });
  }, []);

  useInterval(() => {
    axios.post("/tickets").then((res) => {
      setData(res.data);
    });
  }, 10000);

  return (
    <ScrollView style={style.container}>
      <BodyHead
        text1="Explore The"
        text2="raised"
        text3="Issues"
        style={{ marginLeft: 10 }}
      />
      <Spinner visible={loading} textContent={"Loading..."} />

      {!loading &&
        data.map((ticket, index) => {
          return (
            <TicketItem
              data={ticket}
              key={index}
              viewTicket={(id) => {
                props.navigation.navigate("TicketView", {
                  ticketId: id,
                });
              }}
            />
          );
        })}
    </ScrollView>
  );
};

export default TicketHome;
