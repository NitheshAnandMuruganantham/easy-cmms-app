import { ActivityIndicator, StyleSheet } from "react-native";
import { RneFunctionComponent, Text } from "@rneui/base";
import { Ticket } from "../generated/generated";
import { Button, Card, Icon, Image } from "@rneui/themed";
import React from "react";

interface TicketCardProps {
  data: any;
  viewTicket: (id: string) => void;
}

const TicketCard: RneFunctionComponent<TicketCardProps> = (props) => {
  return (
    <Card>
      <Card.Title>{props.data.name}</Card.Title>
      <Card.Divider />
      <Image
        style={{
          padding: 0,
          width: "100%",
          aspectRatio: 1,
          resizeMode: "contain",
        }}
        PlaceholderContent={<ActivityIndicator color={"#000"} size="large" />}
        source={{
          uri: props.data.photos,
          cache: "default",
        }}
      />
      <Text style={{ marginBottom: 10 }}>{props.data.description}</Text>
      <Text style={{ marginBottom: 10 }}>
        machine : {props.data.machine.id} ({props.data.machine.name})
      </Text>
      <Text style={{ marginBottom: 10 }}>status : {props.data.status}</Text>
      <Text style={{ marginBottom: 10 }}>
        raised by : {props.data.user.name} ({props.data.user.id})
      </Text>
      <Button
        onPress={() => props.viewTicket(props.data.id)}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default TicketCard;
