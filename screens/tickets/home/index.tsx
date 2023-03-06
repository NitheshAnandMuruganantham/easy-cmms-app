import * as React from "react";
import { ScrollView } from "react-native";
import BodyHead from "../../../components/headTitle";
import TicketItem from "../../../components/ticketCard";
import style from "./style";
import { SortOrder, useTicketsQuery } from "../../../generated/generated";
import { StackNavigationProp } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";
interface TicketHomeProps {
  navigation: StackNavigationProp<any>;
}

const TicketHome: React.FunctionComponent<TicketHomeProps> = (props) => {
  const { data, loading, error } = useTicketsQuery({
    variables: {
      orderBy: {
        created_at: SortOrder.Desc,
      },
    },
  });

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
        data?.tickets.map((ticket, index) => {
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
