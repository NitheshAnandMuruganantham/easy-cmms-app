import { View, Text, ScrollView, ActivityIndicator } from "react-native";
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
        style={style.image}
        PlaceholderContent={
          <ActivityIndicator
            color={"#000"}
            size="large"
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          />
        }
        source={{
          uri: data?.ticket.photos,
          cache: "default",
        }}
      />
      <Text style={{ ...style.time, display: data ? "flex" : "none" }}>
        {new Date(data?.ticket.created_at).toLocaleString()}
      </Text>
      <Text style={{ ...style.description, display: data ? "flex" : "none" }}>
        {data?.ticket.description}
      </Text>
      <View
        style={{
          width: "80%",
          marginLeft: "10%",
          marginTop: "5%",
          display: data ? "flex" : "none",
        }}
      >
        <Table
          borderStyle={{
            borderBottomWidth: 3,
            borderColor: "black",
          }}
          style={{
            marginBottom: 50,
          }}
        >
          <Rows
            textStyle={{
              fontSize: 18,
              paddingBottom: 5,
              fontWeight: "500",
            }}
            style={{
              padding: 10,
              borderWidth: 1,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
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
