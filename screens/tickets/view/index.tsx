import { View, Text, ScrollView } from "react-native";
import React, { FunctionComponent, useContext, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useGetTicketQuery } from "../../../generated/generated";
import { Image } from "@rneui/themed";
import { Table, Row, Rows } from "react-native-table-component";
import style from "./style";
import Spinner from "react-native-loading-spinner-overlay/lib";
interface Props {
  navigation: any;
}

const ViewTicket: FunctionComponent<Props> = (props) => {
  const route = useRoute<any>();

  const { data, error, loading } = useGetTicketQuery({
    variables: {
      ticketId: route.params.ticketId,
    },
  });

  return (
    <ScrollView>
      <Spinner visible={loading} textContent={"Loading..."} />
      <Text style={style.title}>{data?.ticket.name}</Text>
      <Image
        source={{ uri: data?.ticket.photos }}
        containerStyle={style.image}
      />
      <Text style={style.time}>
        {new Date(data?.ticket.created_at).toLocaleTimeString()}
      </Text>
      <Text style={style.date}>
        {new Date(data?.ticket.created_at).toLocaleDateString()}
      </Text>
      <Text style={style.description}>{data?.ticket.description}</Text>
      <View style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Rows
            data={[
              [
                "machine",
                `${data?.ticket.machine.label} (${data?.ticket.machine.id})`,
              ],
              [
                "block",
                `${data?.ticket.machine.block.name} (${data?.ticket.machine.block.id})`,
              ],
              [
                "section",
                `${data?.ticket.machine.section.name} (${data?.ticket.machine.section.id})`,
              ],
            ]}
          />
        </Table>
      </View>
    </ScrollView>
  );
};

export default ViewTicket;
